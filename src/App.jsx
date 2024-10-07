import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import NotFound from "./pages/404/NotFound";
import Test from "./pages/test/test";
import Resetpassword from "./pages/reset-password/Resetpassword";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Layout from "./components/Layout";
import SubPage02 from "./pages/admin/dashboard/SubPage02";
import SubPage01 from "./pages/admin/dashboard/SubPage01";
import Payments from "./pages/admin/payments/Payments";
import Tenants from "./pages/admin/tenants/Tenants";
import AddOrEditTenant from "./pages/admin/tenants/AddOrEditTenant";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route
        path="/admin/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/admin/misc/subpage01"
        element={
          <Layout>
            <SubPage01 />
          </Layout>
        }
      />
      <Route
        path="/admin/misc/subpage02"
        element={
          <Layout>
            <SubPage02 />
          </Layout>
        }
      />

      <Route
        path="/admin/payments"
        element={
          <Layout>
            <Payments />
          </Layout>
        }
      />
      <Route
        path="/admin/tenants"
        element={
          <Layout>
            <Tenants />
          </Layout>
        }
      />
      <Route
        path="/admin/tenants/add"
        element={
          <Layout>
            <AddOrEditTenant />
          </Layout>
        }
      />
      <Route
        path="/admin/tenants/edit/:id"
        element={
          <Layout>
            <AddOrEditTenant />
          </Layout>
        }
      />            

      <Route path="/*" element={<NotFound />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default App;
