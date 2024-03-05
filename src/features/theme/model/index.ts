export function useTheme() {
    function setDefalutTheme(theme: string) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("user-theme", theme);
    }

    function defalutTheme() {
        const userTheme = localStorage.getItem("user-theme");
        return userTheme !== null ? userTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }

    function detectUserTheme() {
        const theme = defalutTheme();
        setDefalutTheme(theme);
    }

    return {
        setDefalutTheme,
        defalutTheme,
        detectUserTheme
    };
}
