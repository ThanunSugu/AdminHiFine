import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./page/Admin";
import Login from "./page/Login";
import PageNotFound from "./page/PageNotFound";
import AppLayout from "./page/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="login" element={<Login />} />

        <Route path="app" element={<AppLayout />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} /> */
}
