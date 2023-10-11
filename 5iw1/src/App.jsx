import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import FormTheme from "./components/FormTheme";
import FormThemeReact from "./components/FormThemeReact";

function App() {
  const [count, setCount] = useState(0);
  const [displayLogo, setDisplayLogo] = useState(true);
  const [theme, setTheme] = useState({
    button: {
      backgroundColor: "#D07AD6",
    },
    h1: {
      backgroundColor: "#FF0000",
      color: "#FFFF00",
      border: "1px solid blue",
    },
  });

  return (
    <>
      <div>
        {displayLogo && (
          <>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </>
        )}
        {displayLogo ? (
          <>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </>
        ) : (
          false
        )}
      </div>
      <h1 style={theme.h1}>Vite + React</h1>
      <div className="card">
        <h2>Form using JS (event listener)</h2>
        <FormTheme
          initialValues={theme}
          onSubmit={(data) => {
            console.log(data);
            setTheme(data);
          }}
        />
        <h2>Form using React (states)</h2>
        <FormThemeReact
          initialValues={theme}
          onSubmit={(data) => {
            console.log(data);
            setTheme(data);
          }}
        />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button
          theme={theme.button}
          title="Button 1"
          variant="circle"
          onClick={() => {
            setTheme({
              ...theme,
              h1: {
                ...theme.h1,
                backgroundColor: theme.h1.color,
                color: theme.h1.backgroundColor,
              },
            });
          }}
        />
        <Button
          theme={theme.button}
          variant="rounded"
          onClick={() => setDisplayLogo(!displayLogo)}
        >
          Toggle Logo
        </Button>
        <Button theme={theme.button} title="Button 3">
          <table>
            <tbody>
              <tr>
                <td>Button 3</td>
              </tr>
            </tbody>
          </table>
        </Button>
        <Button theme={theme.button} title="Link" variant="text" />
        <Button
          theme={theme.button}
          title="P"
          component="p"
          onClick={(event) => console.log(event)}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
