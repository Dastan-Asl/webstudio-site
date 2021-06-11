const Btnrefs = {
  headerButton: document.querySelector(".header-menu-button"),
  iconCross: document.querySelector(".icon-cross"),
  iconMenu: document.querySelector(".icon-menu"),
  headerContainer: document.querySelector(".header-container"),
};

const menu = () => {
  Btnrefs.headerContainer.classList.toggle("no-open");
  Btnrefs.headerButton.classList.toggle("is-open");
};

Btnrefs.headerButton.addEventListener("click", menu);
