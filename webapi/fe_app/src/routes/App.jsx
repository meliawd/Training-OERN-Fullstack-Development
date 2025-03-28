import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Teams from "../pages/Teams";
import Services from "../pages/Services";
import Create from "../components/crud/Create";
import Edit from "../components/crud/Edit";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/services" element={<Services />} />
        {/* CRUD Routes */}
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
