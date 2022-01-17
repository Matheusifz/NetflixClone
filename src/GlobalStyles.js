import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
box-sizing: border-box;

*{
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
font-family: 'Roboto', sans-serif;  
}

body {
  background-color: #111;
  color: #fff;
  margin: 0;
}
`;

export default GlobalStyle;
