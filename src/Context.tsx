import { ReactElement, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';
const theme = createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <theme.Provider value={props.theme}>{props.children}</theme.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(theme);
}
