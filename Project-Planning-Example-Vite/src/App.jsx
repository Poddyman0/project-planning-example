import './App.css'
import { Route, Routes } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm"

function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpForm/>>}></Route>
        <Route path="/signin" element={<SignInForm/>>}></Route>
      </Routes>
    </>
  );
}

export default App;