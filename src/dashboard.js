import Navigation from "./components/navigation/navigation.js";
import Home from "./pages/home";
import Profile from "./pages/Profile";
import Footer from "./components/footer/footer.js";

import "./dashboard.scss";

const navigationItems = [
  { url: "/", title: "Homepage" },
  { url: "/profile", title: "Profile" },
];
const url = window.location.pathname;

Navigation(navigationItems);
if (url === "/") {
  Home();
} else if (url === "/profile") {
  Profile();
}
Footer("© 2022. All rights reserved.");
