import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
//import NavBar from "./navBar/NavBar";
//import TabBar from "./tabBar/TabBar"
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing/>}/>
  </Routes>
  </BrowserRouter>
};
export default App;
//export {NavBar,TabBar};
