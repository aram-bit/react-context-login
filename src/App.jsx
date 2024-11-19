import { useState } from "react";
import WelcomePanel from "./components/WelcomePanel";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [user,setUser]=useState(null);
  const [theme,setTheme]=useState("light");
  return <>
<WelcomePanel user={user} setUser={setUser} theme={theme}/>
<ThemeToggle theme={theme} setTheme={setTheme}/>
  </>
  
}
  
