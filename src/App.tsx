import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import ShadchBase from "@/components/shadchBase";
import SignInPage from "@/pages/sign-in-page";
import SignUpPage from "@/pages/sign-up-page";
import IndexPage from "@/pages/index-page";

const AuthLayout = () => {
  return (
    <div>
      <header>인증처리 공통 레이아웃</header>
      <Outlet /> {/* 자식 Route가 렌더링될 자리 */}
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/shadcnbase" element={<ShadchBase />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
