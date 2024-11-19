export default function Greeting({user,theme}) {
    const className="greeting-"+theme;
    return <p className={className}>You logged in as {user.name}.</p>;
  }
  