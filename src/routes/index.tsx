import { Routes, Route } from "react-router-dom";

import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/Home";

import NoMatch from "./NoMatch";

const routes = (
  <Routes>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default routes;
