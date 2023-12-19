import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseEffect from "./components/hooksTS/UseEffect";

const hooks = [
  "useEffect",
  "useCallback",
  "useContext",
  "useReducer",
  "useRef",
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">
          <h1 className="animated-gradient ">Learn React Hooks</h1>
        </Link>
        <nav>
          <ul className="">
            {hooks.map((item) => (
              <li key={item} className="animated-gradient li">
                <Link to={`/${item}`}>{item}</Link>
              </li> //implicit return
            ))}
          </ul>
        </nav>

        <Routes>
          <Route path={"/useEffect"} element={<UseEffect />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
