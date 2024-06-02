export const resetFunction = () => {
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
};

export const resetFunctionwithlogin = () => {
  localStorage.setItem("colorschema", "orange");
  const OrangesThemes = document.querySelector("html");
  OrangesThemes.setAttribute("data-layout-mode", "orange");
  localStorage.setItem("layout", "vertical");
  const VeriticalLayout = document.querySelector("html");
  VeriticalLayout.setAttribute("data-layout", "vertical");
};
