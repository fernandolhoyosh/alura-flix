import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicPage from "../pages/BasicPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import NewVideo from "../pages/NewVideo";
import VideoPlayer from "../pages/VideoPlayer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicPage />}>
          <Route index element={<Home />}></Route>
          <Route path="new" element={<NewVideo />}></Route>
          <Route path=":id" element={<VideoPlayer />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
