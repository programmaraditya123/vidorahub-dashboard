import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Shared/Sidebar";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Creators from "./pages/Creators";
import Videos from "./pages/Videos";
import Complaints from "./pages/Complaints";
import SystemStatus from "./pages/SystemStatus";
 

function App() {
  return (
    <HashRouter>
      <div className="flex h-screen bg-[#0b0014] text-white">
        <Sidebar />
        <main className="flex-1 p-10 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/users" element={<Users />} />
            <Route path="/creators" element={<Creators/>}/>
            <Route path='/videos' element={<Videos/>}/>
            <Route path='/complaints' element={<Complaints/>}/>
            <Route path="/systemstatus" element={<SystemStatus/>}/>
           
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;