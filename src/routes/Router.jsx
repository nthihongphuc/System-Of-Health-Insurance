import { BrowserRouter, Routes, Route } from "react-router-dom";

import BasicLayout from "../layouts/BasicLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ActivationPage from "../pages/ActivationPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/activation" element={<ActivationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
