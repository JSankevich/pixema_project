import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body {
    font-family: 'Exo 2', sans-serif;
    background-color: #000000;
}

#light {
    background-color: white;
    color: black;
    
}

#dark {
    background-color: black;
    color: white;
}
`;