 import React, {createContext, useState} from "react";
 import ReactSwitch from "react-switch";

 export const ThemeContext = createContext ("light");

 export const Theme = () => {
     const [theme, setTheme] = useState("dark");
     const toggleTheme = () => {
         setTheme((theme) => (theme === "light" ? "dark" : "light"))
     }

     return (
         <ThemeContext.Provider value="light">

             <div id={theme}>
                 <h1>This is light mode</h1>
                 <ReactSwitch
                     checked={theme === "dark"}
                     onChange={toggleTheme}
                     checkedIcon={false}
                     uncheckedIcon={false}
                 />
             </div>
         </ThemeContext.Provider>

     )
 }
