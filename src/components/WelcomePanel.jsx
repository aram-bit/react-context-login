import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import Panel from "./Panel";

export default function WelcomePanel({user,setUser,theme}) {
    return (
        <Panel title="Welcome" user={user} setUser={setUser} theme={theme}>
          {user !== null ? (
            <Greeting user={user} setUser={setUser} theme={theme}/>
          ) : (
            <LoginForm user={user} setUser={setUser} theme={theme}  />
          )}
        </Panel>
      );
}