import { useTheme } from "../contexts/ThemeContext";

export default function Panel({ title, children }) {  
    const {theme}=useTheme();
    const className="panel-"+theme;
    return (
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }