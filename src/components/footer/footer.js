import "./footer.scss";

const Footer = (text) => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const p = document.createElement("p");
  p.innerHTML = text;
  footer.appendChild(p);
  const body = document.querySelector("body");
  body.appendChild(footer);
};

export default Footer;
