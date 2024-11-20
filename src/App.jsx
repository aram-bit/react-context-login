import WelcomePanel from "./components/WelcomePanel";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <WelcomePanel />
          <ThemeToggle />
        </ThemeProvider>
      </UserProvider>
    </>
  );
}
