import { useState } from "react";
import Button from "./Button";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

export default function LoginForm() {
  const { theme } = useTheme();
  const { user,setUser } = useUser();
  const className = "form-" + theme;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";
  const onClick = () => {
    setUser({ name: firstName + " " + lastName });
  };

  return (
    <form name="form-man" className={className}>
      <label>
        First name
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <Button disabled={!canLogin} onClick={onClick}>
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </form>
  );
}
