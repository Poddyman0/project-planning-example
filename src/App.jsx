import "./App.css";
import { Route, Routes} from "react-router-dom";
import SignInForm from "./components/SignInForm"
import Signup from "./components/Signup"

function App() {
  return (
    <>
    <Routes>
      <Route path="/LogInForm" element={<SignInForm />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
    </Routes>
    </>
  );
}

export default App;
