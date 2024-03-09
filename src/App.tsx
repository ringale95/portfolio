import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
