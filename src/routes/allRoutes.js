import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "../pages/signUp/signUp";
import Dashboard from "../pages/Home/Home";
import App from "../component/app";
import SuccessSignUp from "../pages/SuccessSignUp/successSignUp";
import ForBrand from "../pages/ForBrand/forBrand";
import RequestPage from "../pages/RequestPage/requestPage";
import PaymentMethod from "../modals/paymentMethods";

const AllRoutes = () => {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <React.Suspense>
        <Routes>
          <Route path={``} element={<App />}>
            <Route>
              <Route index path="/" element={<Dashboard />} />
              <Route index path="/signup" element={<SignUp />} />
              {/* <Route index path="/successSignUp/:rcode" element={<SuccessSignUp/>}/> */}
              <Route index path="/successSignUp" element={<SuccessSignUp/>}/>

              <Route index path="/forbrand" element={<ForBrand/>} />
              <Route index path="/request-a-demo" element={<RequestPage/>}/>
              <Route index path="/payment" element={<PaymentMethod/>}/>
            </Route>
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
    </React.StrictMode>
  );
};
export default AllRoutes;
