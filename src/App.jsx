import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="my-align min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
