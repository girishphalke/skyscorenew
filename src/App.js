import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/mainpage/mainpage";
import Tools from "./pages/tools/index";
import Notification from "./pages/notifications/index";
import Reset from "./pages/reset/index";
import About from "./pages/about/index";
import Sidebar from "./components/sidebar/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
