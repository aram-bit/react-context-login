import { useTheme } from "../contexts/ThemeContext";

export default function Greeting({user}) {
    const {theme}=useTheme();
    const className="greeting-"+theme;
    return <p className={className}>You logged in as {user.name}.</p>;
  }
  