import { createMuiTheme } from '@material-ui/core/styles';

// フォントを設定
const fontFamily = [
    'Noto Sans JP',
    'メイリオ',
    'ＭＳ Ｐゴシック',
    'sans-serif',
].join(',');

const theme = createMuiTheme({
    typography: {
        fontFamily: fontFamily,
    },
    palette: {
        primary: {
            light: '#68ffd2',
            main: '#54a0ff',
            dark: '#2e86de',
            contrastText: '#000000',
            mainGradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
        secondary: {
            light: '#33eb91',
            main: '#00e676',
            dark: '#00a152',
            contrastText: '#ffffff',
        },
        success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
        },
        type: 'dark',
    },
    mixins: {
        toolbar: {
            minHeight: 64,
        },
    },
    props: {
        MuiCheckbox: {
            color: 'primary',
        },
        MuiList: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
        MuiTextField: {
            variant: 'outlined',
        },
    },
});

export default theme;
