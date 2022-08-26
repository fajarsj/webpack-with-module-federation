import Navigation from "./components/navigation/navigation.js";
import Footer from "./components/footer/footer.js";

import "./dashboard.scss";

const navigationItems = [
  { url: "/", title: "Homepage" },
  { url: "/profile", title: "Profile" },
];
const url = window.location.pathname;

(async () => {
  Navigation(navigationItems);
  if (url === "/") {
    await import("HomepageApp/HomePage");
  } else if (url === "/profile") {
    await import("ProfileApp/ProfilePage");
  }
  Footer("© 2022. All rights reserved.");
})();
