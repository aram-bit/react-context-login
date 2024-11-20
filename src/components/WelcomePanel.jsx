import { useUser } from "../contexts/UserContext";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import Panel from "./Panel";

export default function WelcomePanel() {
  const {user}=useUser();
    return (
        <Panel title="Welcome"  >
          {user !== null ? (
            <Greeting  />
          ) : (
            <LoginForm  />
          )}
        </Panel>
      );
}