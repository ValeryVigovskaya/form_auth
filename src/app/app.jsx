import style from "./app.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ForgotPass } from "../pages/ForgotPass";
import { Modal } from "../modal/modal";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <div className={style.app}>
      <Routes location={background || location}>
        <Route path={"/form_auth/"} element={<HomePage />} />
        <Route path={"/form_auth/forgot-password"} element={<ForgotPass />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path={"/form_auth/login/success"}
            element={<Modal onClose={closeModal} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
