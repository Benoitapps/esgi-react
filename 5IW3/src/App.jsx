import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [displayLogo, setDisplayLogo] = useState(false);
  const [theme, setTheme] = useState({
    h1: {
      backgroundColor: "yellow",
      color: "green",
      border: "10px dotted red",
    },
    button: {
      backgroundColor: "orange",
      color: "red",
    },
  });

  const [data, setData] = useState(["coucou", "hello", "salut"]);

  function addElement() {
    setData([
      ...data.slice(0, data.length / 2),
      Date.now(),
      ...data.slice(data.length / 2),
    ]);
  }

  function toggleH1() {
    const bgColor = theme.h1.backgroundColor;
    const color = theme.h1.color;

    setTheme({
      ...theme,
      h1: {
        ...theme.h1,
        backgroundColor: color,
        color: bgColor,
      },
    });
  }
  //React.createElement(
  //  Fragment,
  //  null,
  //  displayLogo && React.createElement("div"),
  //  !displayLogo && React.createElement("p", null, data.map((item) => React.createElement("div", null, item)))),
  //  displayLogo ? React.createElement("div") : React.createElement("p")
  //);
  return (
    <>
      {displayLogo && (
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      )}
      {!displayLogo && <p>Pas de logos à afficher</p>}
      {displayLogo ? (
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      ) : (
        <p>Pas de logos à afficher</p>
      )}
      <h1 style={theme.h1}>Vite + React</h1>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button
          variant="square"
          title="Button 1"
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => setDisplayLogo(!displayLogo)}
        />
        <Button variant="round" title="Button 2" style={{}} />
        <Button
          variant="circle"
          title="+"
          style={{ backgroundColor: "green" }}
          onClick={addElement}
          coucou="coucou"
        />
        <Button
          variant="round"
          style={{ backgroundColor: "pink" }}
          onClick={toggleH1}
        >
          Toggle H1
        </Button>
        <Button
          variant="round"
          style={{ backgroundColor: "pink" }}
          onClick={() => console.error("test error")}
        >
          <img src={viteLogo} />
          <img src={reactLogo} />
        </Button>
        <Button
          component="p"
          variant="round"
          style={{ backgroundColor: "pink" }}
          onClick={() => console.error("test error")}
        >
          <img src={viteLogo} />
          <img src={reactLogo} />
        </Button>
        <Button
          component={(props) => (
            <div>
              Coucou <a onClick={props.onClick}>{props.children}</a>
            </div>
          )}
          variant="round"
          style={{ backgroundColor: "pink" }}
          onClick={() => console.error("test error")}
        >
          <img src={viteLogo} />
          <img src={reactLogo} />
        </Button>
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
