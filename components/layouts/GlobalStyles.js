import styled, {
  createGlobalStyle,
} from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html {
    font-family: 'Roboto', sans-serif;

    --bg: #adc0d52e;

    --darkBlue:#020270;
    --blue1: #0008a3;
    --blue2: #0900ff;
    --blue3: #0095ff;
    --blue4: #79c1e0;
    --blue5: #c0e5f9;

    --dark: #171010;
    --white: #f6f6f6;
    --offWhite: #e8e8e8; 
    --orange: #B85C38;
    --gray: #423F3E;
    --lightGray: #a7a7a7;
    --red: #cb4154;

    --green: #84bd28;
    --greenHover: #658d25;

    --orange: #B85C38;
  
    --maxWidth: 1400px;
    --minWidth: 850px;          
    --navHeight: 60px;
    --searchHeight: 25px; 
    --menuHeight: 45px;
    --menuTreeHeight: 25px;
    --layoutHeaderHeight: calc(var(--navHeight) + var(--searchHeight) + var(--menuHeight) + var(--menuTreeHeight));  
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);

    --goToTopZ: 5;


    box-sizing: border-box;
    font-size: 62.5%;
    
    scroll-behavior: smooth;
  }
  
  *, *:before, *:after{
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0; 
    font-size: 1.5rem;
    line-height: 1.6;
    scroll-behavior: smooth;
    background: var(--bg);
  }
  a {
    text-decoration: none;
  }

  input, textarea {
    font-family: 'Roboto', sans-serif;
  }
 
`;

export { GlobalStyles };
