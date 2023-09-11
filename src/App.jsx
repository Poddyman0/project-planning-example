import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Beat it!</h1>
      <Routes>
        <Route path="/" element={<p>home</p>}/>
        <Route path="/signup" element={<p>signup</p>}/>
        <Route path="/login" element={<p>login</p>}/>
      </Routes>
    </>
  );
}

export default App;
