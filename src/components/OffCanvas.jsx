/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Boxed,
  Close,
  Detached,
  Horizontal,
  Two_col,
  Veritical,
  compact,
  dark,
  small_hover,
} from "../Routes/ImagePath";
import { Link } from "react-router-dom";
import { setLayout } from "../user";
import { useDispatch } from "react-redux";

const OffCanvas = () => {
  const dispatch = useDispatch();
  const [layoutStyle, setLayoutStyle] = useState(
    localStorage.getItem("layout")
  );

  const [layoutColor, setlayoutColor] = useState(
    localStorage.getItem("colorschema")
  );

  const [layoutWidths, setLayoutwidths] = useState(
    localStorage.getItem("layoutpos")
  );
  const [layoutPosition, setLayoutposition] = useState(
    localStorage.getItem("layoutwidth")
  );
  const [layoutTopbar, setLayoutTopbar] = useState(
    localStorage.getItem("topbartheme")
  );
  const [layoutSize, setLayoutSize] = useState(
    localStorage.getItem("layoutSized")
  );

  const [layoutView, setLayoutView] = useState(
    localStorage.getItem("layoutStyling")
  );

  const [layoutSidebar, setLayoutSidebar] = useState(
    localStorage.getItem("layoutSidebarStyle")
  );

  function refreshPage() {
    window.location.reload(false);
  }

  const getlayout = localStorage.getItem("layout");
  const setThemes = () => {
    getlayout === "horizontal"
      ? changes()
      : getlayout === "vertical"
      ? Vertical()
      : TwoColumn();
  };
  const getColorSchema = localStorage.getItem("colorschema");
  const setColorSchema = (color) => {
    switch (color) {
      case "orange":
        OrangeThemes();
        break;
      case "dark":
        DarkThemes();
        break;
      case "light":
        LightThemes();
        break;
      case "blue":
        BlueThemes();
        break;
      default:
        MaroonThemes();
    }
  };

  const getlayoutWidth = localStorage.getItem("layoutwidth");
  const setLayoutWidth = () => {
    getlayoutWidth === "scrollable" ? ScrollBar() : Fixed();
  };

  const getlayoutPos = localStorage.getItem("layoutpos");
  const setLayoutpos = () => {
    getlayoutPos === "boxed" ? BoxThemes() : Fluid();
  };

  const gettopBar = localStorage.getItem("topbartheme");
  const setLayoutBars = () => {
    gettopBar === "light" ? LightBarThemes() : DarkBarThemes();
  };

  const getlayoutSize = localStorage.getItem("layoutSized");
  const setSizes = () => {
    getlayoutSize === "lg"
      ? Default()
      : getlayoutSize === "md"
      ? Compact()
      : SmallHoverView();
  };

  const getlayoutStyle = localStorage.getItem("layoutStyling");
  const setlayoutStyling = () => {
    getlayoutStyle === "default" ? DefaultStyle() : DetachedStyle();
  };

  const getlayoutSidebar = localStorage.getItem("layoutSidebarStyle");
  const setLayoutSidebarStyling = () => {
    getlayoutSidebar === "light"
      ? LightStyle()
      : getlayoutSidebar === "dark"
      ? DarkStyle()
      : GradientStyle();
  };

  useEffect(() => {
    // eslint-disable-next-line
    setThemes();
    setColorSchema(getColorSchema);
    setLayoutWidth(getlayoutWidth);
    setLayoutpos(getlayoutPos);
    setLayoutBars();
    setSizes();
    setlayoutStyling(getlayoutStyle);
    setLayoutSidebarStyling();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changes = () => {
    dispatch(setLayout("horizontal"));
    localStorage.setItem("layout", "horizontal");
    const Themes = document.querySelector("html");
    document.querySelector("#horizantal-sidebar").style.display = "block";
    document.querySelector("#veritical-sidebar").style.display = "none";
    document.querySelector(".two-col-bar").style.display = "none";
    document.querySelector(".sidebar").classList.remove("sidebar-verticalset");
    Themes.setAttribute("data-layout", "horizontal");
  };
  const Vertical = () => {
    dispatch(setLayout("vertical"));
    localStorage.setItem("layout", "vertical");
    const VeriticalLayout = document.querySelector("html");
    document.querySelector("#horizantal-sidebar").style.display = "none";
    document.querySelector(".two-col-bar").style.display = "none";
    document.querySelector("#veritical-sidebar").style.display = "block";
    document.querySelector("#sidebar").classList.add("sidebar-verticalset");
    VeriticalLayout.setAttribute("data-layout", "vertical");
  };
  const TwoColumn = () => {
    localStorage.setItem("layout", "twocolumn");
    const TwoColumnLayout = document.querySelector("html");
    document.querySelector("#horizantal-sidebar").style.display = "none";
    document.querySelector("#veritical-sidebar").style.display = "none";
    document.querySelector(".two-col-bar").style.display = "block";
    TwoColumnLayout.setAttribute("data-layout", "");
  };
  const OrangeThemes = () => {
    localStorage.setItem("colorschema", "orange");

    const OrangesThemes = document.querySelector("html");
    OrangesThemes.setAttribute("data-layout-mode", "orange");
  };
  const DarkThemes = () => {
    localStorage.setItem("colorschema", "dark");
    localStorage.setItem("topbartheme", "dark");
    const DarksThemes = document.querySelector("html");
    DarksThemes.setAttribute("data-layout-mode", "dark");
    DarksThemes.setAttribute("data-topbar", "dark");
  };
  const LightThemes = () => {
    localStorage.setItem("colorschema", "light");

    const LightsThemes = document.querySelector("html");
    LightsThemes.setAttribute("data-layout-mode", "light");
  };
  const BlueThemes = () => {
    localStorage.setItem("colorschema", "blue");

    const BluesThemes = document.querySelector("html");

    BluesThemes.setAttribute("data-layout-mode", "blue", "data-topbar", "blue");
    BluesThemes.setAttribute("data-topbar", "blue");
  };
  const MaroonThemes = () => {
    localStorage.setItem("colorschema", "maroon");

    const MaroonsThemes = document.querySelector("html");
    MaroonsThemes.setAttribute("data-layout-mode", "maroon");
    MaroonsThemes.setAttribute("data-topbar", "maroon");
  };
  const ScrollBar = () => {
    localStorage.setItem("layoutwidth", "scrollable");

    const ScrollBarThemes = document.querySelector("html");

    ScrollBarThemes.setAttribute("data-layout-position", "scrollable");
  };
  const Fixed = () => {
    localStorage.setItem("layoutwidth", "fixed");

    const FixedThemes = document.querySelector("html");
    FixedThemes.setAttribute("data-layout-position", "fixed");
  };
  const PurpleThemes = () => {
    localStorage.setItem("colorschema", "purple");

    const PurplesThemes = document.querySelector("html");
    PurplesThemes.setAttribute("data-layout-mode", "purple");
    PurplesThemes.setAttribute("data-topbar", "purple");
  };
  const LightBarThemes = () => {
    localStorage.setItem("topbartheme", "light");
    const LightBarsThemes = document.querySelector("html");
    LightBarsThemes.setAttribute("data-topbar", "light");
    LightBarsThemes.setAttribute("data-sidebar", "dark");
  };
  const DarkBarThemes = () => {
    localStorage.setItem("topbartheme", "dark");
    const DarkBarsThemes = document.querySelector("html");
    DarkBarsThemes.setAttribute("data-topbar", "dark");
    DarkBarsThemes.setAttribute("data-sidebar", "light");
  };
  const Fluid = () => {
    localStorage.setItem("layoutpos", "fluid");
    const FluidThemes = document.querySelector("html");
    FluidThemes.setAttribute("data-layout-width", "fluid");
    FluidThemes.setAttribute("data-sidebar-size", "lg");
  };
  const BoxThemes = () => {
    localStorage.setItem("layoutpos", "boxed");
    const BoxsThemes = document.querySelector("html");
    BoxsThemes.setAttribute("data-layout-width", "boxed");
    BoxsThemes.setAttribute("data-sidebar-size", "sm-hover");
  };

  const Default = () => {
    localStorage.setItem("layoutSized", "lg");
    const DefaultThemes = document.querySelector("html");
    DefaultThemes.setAttribute("data-sidebar-size", "lg");
  };
  const Compact = () => {
    localStorage.setItem("layoutSized", "md");
    const CompactThemes = document.querySelector("html");
    CompactThemes.setAttribute("data-sidebar-size", "md");
  };
  const SmallHoverView = () => {
    localStorage.setItem("layoutSized", "sm-hover");
    const SmallHoverViewThemes = document.querySelector("html");
    SmallHoverViewThemes.setAttribute("data-sidebar-size", "sm-hover");
  };
  const DefaultStyle = () => {
    localStorage.setItem("layoutStyling", "default");
    const DefaultStylesThemes = document.querySelector("html");
    DefaultStylesThemes.setAttribute("data-layout-style", "default");
  };
  const DetachedStyle = () => {
    localStorage.setItem("layoutStyling", "detached");
    const DetachedStylesThemes = document.querySelector("html");
    DetachedStylesThemes.setAttribute("data-layout-style", "detached");
  };

  const LightStyle = () => {
    localStorage.setItem("layoutSidebarStyle", "light");
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-sidebar", "light");
    }
  };
  const DarkStyle = () => {
    localStorage.setItem("layoutSidebarStyle", "dark");
    const DarkStylesThemes = document.querySelector("html");
    DarkStylesThemes.setAttribute("data-sidebar", "dark");
  };
  const GradientStyle = () => {
    localStorage.setItem("layoutSidebarStyle", "gradient");
    const GradientsThemes = document.querySelector("html");
    GradientsThemes.setAttribute("data-sidebar", "gradient");
  };

  const resetFunctions = () => {
    localStorage.setItem("colorschema", "orange");
    const OrangesThemes = document.querySelector("html");
    OrangesThemes.setAttribute("data-layout-mode", "orange");
    localStorage.setItem("layout", "vertical");
    const VeriticalLayout = document.querySelector("html");
    VeriticalLayout.setAttribute("data-layout", "vertical");
    document.querySelector("#horizantal-sidebar").style.display = "none";
    document.querySelector(".two-col-bar").style.display = "none";
    document.querySelector("#veritical-sidebar").style.display = "block";
    document.querySelector("#sidebar").classList.add("sidebar-verticalset");

    const FluidThemes = document.querySelector("html");
    FluidThemes.setAttribute("data-layout-width", "fluid");
    FluidThemes.setAttribute("data-sidebar-size", "lg");

    localStorage.setItem("topbartheme", "light");
    const LightBarsThemes = document.querySelector("html");
    LightBarsThemes.setAttribute("data-topbar", "light");
    LightBarsThemes.setAttribute("data-sidebar", "dark");

    localStorage.setItem("layoutStyling", "default");
    const DefaultStylesThemes = document.querySelector("html");
    DefaultStylesThemes.setAttribute("data-layout-style", "default");

    setLayoutStyle("vertical");
    setlayoutColor("orange");
    setLayoutwidths("fluid");
    setLayoutposition("fixed");
    setLayoutTopbar("light");
    setLayoutSize("lg");
    setLayoutView("default");
    setLayoutSidebar("dark");
    localStorage.setItem("colorschema", "orange");
    localStorage.setItem("layout", "vertical");
    localStorage.setItem("layoutwidth", "fixed");
    localStorage.setItem("layoutpos", "fluid");
    localStorage.setItem("topbartheme", "light");
    localStorage.setItem("layoutSized", "lg");
    localStorage.setItem("layoutStyling", "default");
    localStorage.setItem("layoutSidebarStyle", "dark");
  };
  return (
    <>
      <div>
        <div className="settings-icon">
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#theme-settings-offcanvas"
            aria-controls="theme-settings-offcanvas"
          >
            <i className="las la-cog" />
          </span>
        </div>
        <div
          className="offcanvas offcanvas-end border-0 "
          tabIndex={-1}
          id="theme-settings-offcanvas"
        >
          <div className="sidebar-headerset">
            <div className="sidebar-headersets">
              <h2>Customizer</h2>
              <h3>Customize your overview Page layout</h3>
            </div>
            <div className="sidebar-headerclose">
              <Link to="#" data-bs-dismiss="offcanvas" aria-label="Close">
                <img src={Close} alt="img" />
              </Link>
            </div>
          </div>
          <div className="offcanvas-body p-0">
            <div data-simplebar className="h-100">
              <div className="settings-mains">
                <div className="layout-head">
                  <h5>Layout</h5>
                  <h6>Choose your layout</h6>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        id="customizer-layout01"
                        name="data-layout"
                        type="radio"
                        defaultValue="vertical"
                        checked={layoutStyle === "vertical" ? true : false}
                        onChange={() => setLayoutStyle("vertical")}
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="customizer-layout01"
                      >
                        <img src={Veritical} alt="img" onClick={Vertical} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Vertical</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        id="customizer-layout02"
                        name="data-layout"
                        type="radio"
                        defaultValue="horizontal"
                        checked={layoutStyle === "horizontal" ? true : false}
                        onChange={() => setLayoutStyle("horizontal")}
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="customizer-layout02"
                      >
                        <img
                          src={Horizontal}
                          alt="img"
                          onClick={changes}
                          onChange={refreshPage}
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Horizontal</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        id="customizer-layout03"
                        name="data-layout"
                        type="radio"
                        defaultValue="twocolumn"
                        checked={layoutStyle === "twocolumn" ? true : false}
                        onChange={() => setLayoutStyle("twocolumn")}
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="customizer-layout03"
                      >
                        <img src={Two_col} alt="img" onClick={TwoColumn} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Two Column</h5>
                  </div>
                </div>
                <div className="layout-head pt-3">
                  <h5>Color Scheme</h5>
                  <h6>Choose Light or Dark Scheme.</h6>
                </div>
                <div className="colorscheme-cardradio">
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-orange"
                          defaultValue="orange"
                          checked={layoutColor === "orange" ? true : false}
                          onChange={() => setlayoutColor("orange")}
                        />
                        <label
                          className="form-check-label  avatar-md w-100 "
                          htmlFor="layout-mode-orange"
                        >
                          <img
                            src={Veritical}
                            alt="img"
                            onClick={OrangeThemes}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Orange</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-light"
                          defaultValue="light"
                          checked={layoutColor === "light" ? true : false}
                          onChange={() => setlayoutColor("light")}
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="layout-mode-light"
                        >
                          <img
                            src={Veritical}
                            alt="img"
                            onClick={LightThemes}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Light</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio dark  p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-dark"
                          defaultValue="dark"
                          checked={layoutColor === "dark" ? true : false}
                          onChange={() => setlayoutColor("dark")}
                        />
                        <label
                          className="form-check-label avatar-md w-100 "
                          htmlFor="layout-mode-dark"
                        >
                          <img src={Veritical} alt="img" onClick={DarkThemes} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Dark</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio blue  p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-blue"
                          defaultValue="blue"
                          checked={layoutColor === "blue" ? true : false}
                          onChange={() => setlayoutColor("blue")}
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="layout-mode-blue"
                        >
                          <img src={Veritical} alt="img" onClick={BlueThemes} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Blue</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio maroon p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-maroon"
                          defaultValue="maroon"
                          checked={layoutColor === "maroon" ? true : false}
                          onChange={() => setlayoutColor("maroon")}
                        />
                        <label
                          className="form-check-label  avatar-md w-100 "
                          htmlFor="layout-mode-maroon"
                        >
                          <img
                            src={Veritical}
                            alt="img"
                            onClick={MaroonThemes}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Maroon</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio purple p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-purple"
                          defaultValue="purple"
                          checked={layoutColor === "purple" ? true : false}
                          onChange={() => setlayoutColor("purple")}
                        />
                        <label
                          className="form-check-label  avatar-md w-100 "
                          htmlFor="layout-mode-purple"
                        >
                          <img
                            src={Veritical}
                            alt="img"
                            onClick={PurpleThemes}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Purple</h5>
                    </div>
                  </div>
                </div>
                <div id="layout-width">
                  <div className="layout-head pt-3">
                    <h5>Layout Width</h5>
                    <h6>Choose Fluid or Boxed layout.</h6>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-width"
                          id="layout-width-fluid"
                          defaultValue="fluid"
                          checked={layoutWidths === "fluid" ? true : false}
                          onChange={() => setLayoutwidths("fluid")}
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="layout-width-fluid"
                        >
                          <img src={Veritical} alt="img" onClick={Fluid} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Fluid</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-width"
                          id="layout-width-boxed"
                          defaultValue="boxed"
                          checked={layoutWidths === "boxed" ? true : false}
                          onChange={() => setLayoutwidths("boxed")}
                        />
                        <label
                          className="form-check-label avatar-md w-100 px-2"
                          htmlFor="layout-width-boxed"
                        >
                          <img src={Boxed} alt="img" onClick={BoxThemes} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Boxed</h5>
                    </div>
                  </div>
                </div>
                <div id="layout-position">
                  <div className="layout-head pt-3">
                    <h5>Layout Position</h5>
                    <h6>Choose Fixed or Scrollable Layout Position.</h6>
                  </div>
                  <div
                    className="btn-group bor-rad-50 overflow-hidden radio"
                    role="group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="data-layout-position"
                      id="layout-position-fixed"
                      defaultValue="fixed"
                      checked={layoutPosition === "fixed" ? true : false}
                      onChange={() => setLayoutposition("fixed")}
                    />
                    <label
                      className="btn btn-light w-sm"
                      htmlFor="layout-position-fixed"
                      onClick={Fixed}
                    >
                      Fixed
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="data-layout-position"
                      id="layout-position-scrollable"
                      defaultValue="scrollable"
                      checked={layoutPosition === "scrollable" ? true : false}
                      onChange={() => setLayoutposition("scrollable")}
                    />
                    <label
                      className="btn btn-light w-sm ms-0"
                      htmlFor="layout-position-scrollable"
                      onClick={ScrollBar}
                    >
                      Scrollable
                    </label>
                  </div>
                </div>
                <div className="layout-head pt-3">
                  <h5>Topbar Color</h5>
                  <h6>Choose Light or Dark Topbar Color.</h6>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-check card-radio  p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-topbar"
                        id="topbar-color-light"
                        defaultValue="light"
                        checked={layoutTopbar === "light" ? true : false}
                        onChange={() => setLayoutTopbar("light")}
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="topbar-color-light"
                      >
                        <img
                          src={Veritical}
                          alt="img"
                          onClick={LightBarThemes}
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Light</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-topbar"
                        id="topbar-color-dark"
                        defaultValue="dark"
                        checked={layoutTopbar === "dark" ? true : false}
                        onChange={() => setLayoutTopbar("dark")}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="topbar-color-dark"
                      >
                        <img src={dark} alt="img" onClick={DarkBarThemes} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Dark</h5>
                  </div>
                </div>
                <div id="sidebar-size">
                  <div className="layout-head pt-3">
                    <h5>Sidebar Size</h5>
                    <h6>Choose a size of Sidebar.</h6>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio  p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar-size"
                          id="sidebar-size-default"
                          defaultValue="lg"
                          checked={layoutSize === "lg" ? true : false}
                          onChange={() => setLayoutSize("lg")}
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="sidebar-size-default"
                        >
                          <img src={Veritical} alt="img" onClick={Default} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Default</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar-size"
                          id="sidebar-size-compact"
                          defaultValue="md"
                          checked={layoutSize === "md" ? true : false}
                          onChange={() => setLayoutSize("md")}
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="sidebar-size-compact"
                        >
                          <img src={compact} alt="img" onClick={Compact} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Compact</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar-size"
                          id="sidebar-size-small-hover"
                          defaultValue="sm-hover"
                          checked={layoutSize === "sm-hover" ? true : false}
                          onChange={() => setLayoutSize("sm-hover")}
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="sidebar-size-small-hover"
                        >
                          <img
                            src={small_hover}
                            alt="img"
                            onClick={SmallHoverView}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">
                        Small Hover View
                      </h5>
                    </div>
                  </div>
                </div>
                <div id="sidebar-view">
                  <div className="layout-head pt-3">
                    <h5>Sidebar View</h5>
                    <h6>Choose Default or Detached Sidebar view.</h6>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio  p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-style"
                          id="sidebar-view-default"
                          defaultValue="default"
                          checked={layoutView === "default" ? true : false}
                          onChange={() => setLayoutView("default")}
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="sidebar-view-default"
                        >
                          <img src={compact} alt="img" onClick={DefaultStyle} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Default</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-style"
                          id="sidebar-view-detached"
                          defaultValue="detached"
                          checked={layoutView === "detached" ? true : false}
                          onChange={() => setLayoutView("detached")}
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="sidebar-view-detached"
                        >
                          <img
                            src={Detached}
                            alt="img"
                            onClick={DetachedStyle}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Detached</h5>
                    </div>
                  </div>
                </div>
                <div id="sidebar-color">
                  <div className="layout-head pt-3">
                    <h5>Sidebar Color</h5>
                    <h6>Choose a color of Sidebar.</h6>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div
                        className="form-check sidebar-setting card-radio p-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBgGradient.show"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-light"
                          defaultValue="light"
                          checked={layoutSidebar === "light" ? true : false}
                          onChange={() => setLayoutSidebar("light")}
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="sidebar-color-light"
                        >
                          <span
                            className="bg-light bg-sidebarcolor"
                            onClick={LightStyle}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Light</h5>
                    </div>
                    <div className="col-4">
                      <div
                        className="form-check sidebar-setting card-radio p-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBgGradient.show"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-dark"
                          defaultValue="dark"
                          checked={layoutSidebar === "dark" ? true : false}
                          onChange={() => setLayoutSidebar("dark")}
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="sidebar-color-dark"
                        >
                          <span
                            className="bg-darks bg-sidebarcolor"
                            onClick={DarkStyle}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Dark</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient"
                          defaultValue="gradient"
                          checked={layoutSidebar === "gradient" ? true : false}
                          onChange={() => setLayoutSidebar("gradient")}
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="sidebar-color-gradient"
                        >
                          <span
                            className="bg-gradients bg-sidebarcolor"
                            onClick={GradientStyle}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Gradient</h5>
                    </div>
                    <div className="col-4 d-none">
                      <button
                        className="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBgGradient"
                        aria-expanded="false"
                        aria-controls="collapseBgGradient"
                      >
                        <span className="d-flex gap-1 h-100">
                          <span className="flex-shrink-0">
                            <span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                              <span className="d-block p-1 px-2 bg-soft-light rounded mb-2" />
                              <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                              <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                              <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                            </span>
                          </span>
                          <span className="flex-grow-1">
                            <span className="d-flex h-100 flex-column">
                              <span className="bg-light d-block p-1" />
                              <span className="bg-light d-block p-1 mt-auto" />
                            </span>
                          </span>
                        </span>
                      </button>
                      <h5 className="fs-13 text-center mt-2">Gradient</h5>
                    </div>
                  </div>
                  <div className="collapse d-none" id="collapseBgGradient">
                    <div className="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded">
                      <div className="form-check sidebar-setting card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient"
                          defaultValue="gradient"
                        />
                        <label
                          className="form-check-label p-0 avatar-xs rounded-circle"
                          htmlFor="sidebar-color-gradient"
                        >
                          <span className="avatar-title rounded-circle bg-vertical-gradient" />
                        </label>
                      </div>
                      <div className="form-check sidebar-setting card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient-2"
                          defaultValue="gradient-2"
                        />
                        <label
                          className="form-check-label p-0 avatar-xs rounded-circle"
                          htmlFor="sidebar-color-gradient-2"
                        >
                          <span className="avatar-title rounded-circle bg-vertical-gradient-2" />
                        </label>
                      </div>
                      <div className="form-check sidebar-setting card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient-3"
                          defaultValue="gradient-3"
                        />
                        <label
                          className="form-check-label p-0 avatar-xs rounded-circle"
                          htmlFor="sidebar-color-gradient-3"
                        >
                          <span className="avatar-title rounded-circle bg-vertical-gradient-3" />
                        </label>
                      </div>
                      <div className="form-check sidebar-setting card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient-4"
                          defaultValue="gradient-4"
                        />
                        <label
                          className="form-check-label p-0 avatar-xs rounded-circle"
                          htmlFor="sidebar-color-gradient-4"
                        >
                          <span className="avatar-title rounded-circle bg-vertical-gradient-4" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-footer border-top p-3 text-center">
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-light w-100 bor-rad-50"
                  id="reset-layout"
                  onClick={resetFunctions}
                >
                  Reset
                </button>
              </div>
              <div className="col-6">
                <Link
                  to="https://themeforest.net/item/smarthr-bootstrap-admin-panel-template/21153150"
                  target="_blank"
                  className="btn btn-primary w-100 bor-rad-50"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OffCanvas;
