import "./App.css";
import { Route, Routes} from "react-router-dom";
import SignInForm from "./components/SignInForm"

function App() {
  return (
    <>
    <Routes>
      <Route path="/LogInForm" element={<SignInForm />}></Route>
    </Routes>
    </>
  );
}

export default App;
