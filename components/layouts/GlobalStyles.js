import styled, {
  createGlobalStyle,
} from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html {
    font-family: 'Roboto', sans-serif;

    --bg: #f0f0f0;

    --darkBlue:#020270;
    --blue1: #0008a3;
    --blue2: #0900ff;
    /* --blue3: #87C159; */
    --blue5: #058240;
    
    --linkBlue: #0095ff;
    
    --green: #84bd28;
    --green1: #058240;
    --green2: #87C159;
    --green3: #7CA8A1;
    --green4: #4f7771;
    --green5: #058240;
    /* 7CA8A1 */

    --yellow: #fcc82e;
    --yellow1: #f4d169;
    --yellow2: #F3C301;
    --orange: #B85C38;


    --lightGray: #a7a7a7;
    --lightGray1: #d6ded1;
    --gray: #423F3E;
    --gray1: #505050;
    --dark: #171010;
    --white: #f6f6f6;
    --offWhite: #e8e8e8; 
 
    --red: #cb4154;


    --greenHover: #658d25;


  
    --maxWidth: 1400px;
    --midWidth: 1200px;
    --minWidth: 850px;          
    --navHeight: 100px;
    --navHeightSm: 70px;
    --searchHeight: 30px; 
    --menuHeight: 45px;
    --menuTreeHeight: 35px;
    --layoutHeaderHeight: calc(var(--navHeight) + var(--searchHeight) + var(--menuHeight) + var(--menuTreeHeight));  

    --bs: 0 4px 10px 0 #43704a40;
    --bs2: 0 2px 8px 0 rgba(0,0,0,0.15);
    --bs3: 0 2px 8px 3px rgba(0,0,0,0.15);
    --bsHover: 0 2px 6px 0 #43704a30;
    --bsGray: rgba(0,0,0,0.15);

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

  p{
    color: var(--gray1);
  }

   hr {
      height: 1px;
      border: none;
    }

  input, textarea {
    font-family: 'Roboto', sans-serif;
  }
 
`;

export { GlobalStyles };
