import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddJob from './pages/add-job/index';
import ListJobs from './pages/list-jobs/index';
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<ListJobs />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
