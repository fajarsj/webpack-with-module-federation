import "./home-layout.scss";

const HomeLayout = (title) => {
  const div = document.createElement("div");
  div.classList.add("home-layout");
  const h1 = document.createElement("h1");
  h1.classList.add("home-layout__title");
  h1.innerHTML = title;
  div.appendChild(h1);
  document.querySelector("body").appendChild(div);
};

export default HomeLayout;
