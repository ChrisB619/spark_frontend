import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AppContainer from "../Appcontainer";
import store from "../../store";
import { Provider } from "react-redux";
// import Companies from '../../views/pages/Crm/companies';
// import CompaniesGrid from '../../views/pages/Crm/CompaniesGrid';
import Login from "../../views/pages/Authentication/Login";
import Register from "../../views/pages/Authentication/Register";
import Otp from "../../views/pages/Authentication/Otp";
import Error404 from "../../views/pages/Error/Error404";
import Error500 from "../../views/pages/Error/Error500";
import JobList from "../../views/pages/Authentication/JobList";
import JobView from "../../views/pages/Authentication/JobView";
import ChangePassword from "../../views/pages/Authentication/ChangePassword";
import ForgotPassword from "../../views/pages/Authentication/ForgotPassword";
import LockScreen from "../../views/pages/Authentication/LockScreen";
import Accordions from "../../views/pages/Ui_Interface/Components/Accordions";
import Alerts from "../../views/pages/Ui_Interface/Components/Alerts";
import Breadcrumbs from "../../views/pages/Ui_Interface/Components/Breadcrumbs";
import Avatar from "../../views/pages/Ui_Interface/Components/Avatar";
import Badges from "../../views/pages/Ui_Interface/Components/Badges";
import ButtonCard from "../../views/pages/Ui_Interface/Components/ButtonCard";
import ButtonGroup from "../../views/pages/Ui_Interface/Components/ButtonGroup";
import Cards from "../../views/pages/Ui_Interface/Components/Cards";
import Dropdowns from "../../views/pages/Ui_Interface/Components/Dropdowns";
import Grid from "../../views/pages/Ui_Interface/Components/Grid";
import Images from "../../views/pages/Ui_Interface/Components/Images";
import Media from "../../views/pages/Ui_Interface/Components/Media";
import Modals from "../../views/pages/Ui_Interface/Components/Modals";
import Offcanvas from "../../views/pages/Ui_Interface/Components/Offcanvas";
import Pagination from "../../views/pages/Ui_Interface/Components/Pagination";
import Popover from "../../views/pages/Ui_Interface/Components/Popover";
import Progress from "../../views/pages/Ui_Interface/Components/Progress";
import Placeholder from "../../views/pages/Ui_Interface/Components/Placeholder";
import RangeSlider from "../../views/pages/Ui_Interface/Components/RangeSlider";
import Spinners from "../../views/pages/Ui_Interface/Components/Spinners";
import SweetAlert from "../../views/pages/Ui_Interface/Components/SweetAlert";
import Tabs from "../../views/pages/Ui_Interface/Components/Tabs";
import Toats from "../../views/pages/Ui_Interface/Components/Toats";
// import Tooltip from "../../views/pages/Ui_Interface/Components/Tooltip";
import Typography from "../../views/pages/Ui_Interface/Components/Typography";
import Videos from "../../views/pages/Ui_Interface/Components/Videos";
import Lightbox from "../../views/pages/Ui_Interface/Components/Lightbox";
import Carousel from "../../views/pages/Ui_Interface/Components/Carousel";
import { Navigate } from "react-router-dom/dist";
import Borders from "../../views/pages/Ui_Interface/Components/Borders";
import Breadcrumb from "../../views/pages/Ui_Interface/Components/Breadcrumb";
import Colors from "../../views/pages/Ui_Interface/Components/colors";
import UiModals from "../../views/pages/Ui_Interface/Components/uimodals";
import Spinner from "../../views/pages/Ui_Interface/Components/Spinner";
import Tooltips from "../../views/pages/Ui_Interface/Components/Tooltip";
import ComingSoon from "../../views/pages/Pages/ComingSoon";
import UnderManitenance from "../../views/pages/Pages/UnderManitenance";
// import Ticket from "../../views/pages/Employees/Ticket";
// import TicketDetails from "../../views/pages/Employees/TicketDetails";
// import routingObjects from "../Appcontainer/index"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  useEffect(() => {
    localStorage.setItem("email", "admin@dreamstechnologies.com");
    localStorage.setItem("password", "123456");
  }, []);
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/error-404" element={<Error404 />} />
            <Route path="/error-500" element={<Error500 />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/under-maintenance" element={<UnderManitenance />} />
            {/* <Route path="/companies" element={<Companies />} />
            <Route path="/companies-grid" element={<CompaniesGrid />} /> */}
            <Route path="/job-list" element={<JobList />} />
            <Route path="/job-view" element={<JobView />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/lock-screen" element={<LockScreen />} />
            <Route path="/accordion" element={<Accordions />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/breadcrumbs" element={<Breadcrumbs />} />
            <Route path="/avatar" element={<Avatar />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/buttons" element={<ButtonCard />} />
            <Route path="/buttongroup" element={<ButtonGroup />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/dropdowns" element={<Dropdowns />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="/images" element={<Images />} />
            <Route path="/media" element={<Media />} />
            <Route path="/modal" element={<Modals />} />
            <Route path="/offcanvas" element={<Offcanvas />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/popover" element={<Popover />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/placeholders" element={<Placeholder />} />
            <Route path="/rangeslider" element={<RangeSlider />} />
            <Route path="/spinners" element={<Spinners />} />
            <Route path="/sweetalert" element={<SweetAlert />} />
            <Route path="/nav-tabs" element={<Tabs />} />
            <Route path="/toastr" element={<Toats />} />
            <Route path="/tooltips" element={<Tooltips />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/video" element={<Videos />} />
            <Route path="/lightbox" element={<Lightbox />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/borders" element={<Borders />} />
            <Route path="/breadcrumb" element={<Breadcrumb />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/modals" element={<UiModals />} />
            <Route path="/spinner" element={<Spinner />} />
            <Route path="/*" element={<AppContainer />} />
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default AppRouter;
