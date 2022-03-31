export type CustomProps = {
    children: React.ReactNode;
};

export type ThemeValue = {
    theme: string;
    updateTheme: (newTheme:string) => void;
  };