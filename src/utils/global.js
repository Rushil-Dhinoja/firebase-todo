import { createGlobalStyle } from 'styled-components';
import montserratLight from '../assets/fonts/Montserrat-Light.ttf';
import montserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import montserratSemi from '../assets/fonts/Montserrat-SemiBold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'montserrat';
        src: url(${montserratRegular});
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'montserrat';
        src: url(${montserratLight});
        font-style: normal;
        font-weight: 300;
        font-display: swap;
    }
    @font-face {
        font-family: 'montserrat';
        src: url(${montserratSemi});
        font-style: normal;
        font-weight: 600;
        font-display: swap;
    }

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html{
        font-size: 62.5%;
        box-sizing: border-box;
        --color-main: ${(props) => props.theme.colors.antarcticDeep};
        --color-secondary:  ${(props) => props.theme.colors.woodland};
        --color-tertiary: ${(props) => props.theme.colors.appleWhite};
        --color-accent: ${(props) => props.theme.colors.moorlandMist};
        --color-white: ${(props) => props.theme.colors.white};
        --color-black: ${(props) => props.theme.colors.black};
        --alert-success: ${(props) => props.theme.colors.alertSuccess};
        --alert-danger: ${(props) => props.theme.colors.alertDanger};
        --alert-shadow: ${(props) => props.theme.colors.alertShadow};
        --box-shadow: ${(props) => props.theme.colors.boxShadow};
        --button-shadow: ${(props) => props.theme.colors.buttonShadow};
    }

    body{
        font-family: 'montserrat';
        font-weight: 300;
        line-height: 1.6;
    }

    a, input, textarea, button{
        outline: none;
        font-family: inherit;
        text-decoration: none;
    }

    @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}


`;
