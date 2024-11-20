import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

export default function Greeting() {
  const {user}=useUser();
    const {theme}=useTheme();
    const className="greeting-"+theme;
    return <p className={className}>You logged in as {user.name}.</p>;
  }
  