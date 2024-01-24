import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import BasicLayout from "../layouts/BasicLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import RegisteredInsurancePage from "../pages/RegisteredInsurancePage";
import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SupportPage from "../pages/SupportPage";
import ProfileLayout from "../layouts/ProfileLayout";
import RegisterInsurance from "../pages/RegisterInsurance";
import BillPage from "../pages/BillPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import RequestPayment from "../pages/RequestPayment";
import InsuranceListPage from "../pages/AdminPage/InsuranceListPage";

import AdminPage from "../pages/AdminPage";
import ApointmentList from "../pages/AdminPage/ApointmentList";
import PolicyList from "../pages/AdminPage/PolicyList";
import FeeListPage from "../pages/AdminPage/FeeListPage";
import UpdatePolicyPage from "../pages/AdminPage/UpdatePolicy";
import HistoryPaymentList from "../pages/AdminPage/HistoryPaymentList";
import BillDetailPage from "../pages/AdminPage/BillDetailPage";

const ProfileRouter = () => {
  return (
    <Routes>
      <Route element={<ProfileLayout />}>
        <Route path="/account" element={<ProfilePage />} />
        {/* <Route path="/account" element={<ProfilePage_update />} /> */}
        <Route path="/resetpw" element={<ResetPasswordPage />} />
        <Route path="/insurance" element={<RegisteredInsurancePage />} />
        <Route path="/bill" element={<BillPage />} />
        <Route path="/bill/bill_detail" element={<BillDetailPage />} />

        {/* <Route path="/activation" element={<ActivationPage />} /> */}
      </Route>
    </Routes>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/type/:id" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/*" element={<ProfileRouter />} />
          <Route path="/product/:id/register" element={<RegisterInsurance />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/payment_request" element={<RequestPayment />} />
          <Route path="/admin/" element={<AdminPage />} />
          <Route path="/admin/InsuranceListPage" element={<InsuranceListPage />} />
          <Route path="/admin/ApointmentList" element={<ApointmentList />} />
          <Route path="/admin/PolicyList" element={<PolicyList />} />
          <Route path="/admin/FeeListPage" element={<FeeListPage />} />
          <Route path="/admin/UpdatePolicy" element={<UpdatePolicyPage />} />
          <Route path="/admin/HistoryPaymentList" element={<HistoryPaymentList />} />


          {/* <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile_update" element={<ProfilePage_update />} />
                    <Route path="/resetpass" element={<ResetPasswordPage/>}/>
                    <Route path="/regis_insurance" element={<RegisteredInsurancePage/>}/> */}
          {/* <Route path="/activation" element={<ActivationPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;