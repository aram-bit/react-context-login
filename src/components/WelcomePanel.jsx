import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import Panel from "./Panel";

export default function WelcomePanel({user,setUser}) {
    return (
        <Panel title="Welcome" user={user} setUser={setUser} >
          {user !== null ? (
            <Greeting user={user} setUser={setUser} />
          ) : (
            <LoginForm user={user} setUser={setUser}   />
          )}
        </Panel>
      );
}