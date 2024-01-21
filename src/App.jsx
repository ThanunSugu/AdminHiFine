import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admin from "./page/Admin";
import Login from "./page/Login";
import PageNotFound from "./page/PageNotFound";
import AppLayout from "./page/AppLayout";
import Dashboard from "./page/Dashboard";
import UserManage from "./page/UserManage";
import ImageManage from "./page/ImageManage";
import ActivityManage from "./page/ActivityManage";
import ExerciseManage from "./page/ExerciseManage";
import DataTable from "./components/DataTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="datatable" element={<DataTable />} />
          <Route path="usermanage" element={<UserManage />} />
          <Route path="imagemanage" element={<ImageManage />} />
          <Route path="activitymanage" element={<ActivityManage />} />
          <Route path="exercisemanage" element={<ExerciseManage />} />
        </Route>

        <Route path="/" element={<Admin />} />
        <Route path="login" element={<Login />} />

        {/* <Route path="app" element={<AppLayout />} /> */}

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
