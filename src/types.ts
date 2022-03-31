export type CustomProps = {
    children: React.ReactNode;
    useSystem?: boolean;
};

export type ThemeValue = {
    theme: string;
    updateTheme: (newTheme:string) => void;
  };