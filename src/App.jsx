import { useState } from "react";
import WelcomePanel from "./components/WelcomePanel";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <ThemeProvider>
        <WelcomePanel user={user} setUser={setUser} />
        <ThemeToggle />
      </ThemeProvider>
      ;
    </>
  );
}
