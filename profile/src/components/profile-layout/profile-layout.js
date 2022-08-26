import "./profile-layout.scss";

const ProfileLayout = (title, subtitle) => {
  const div = document.createElement("div");
  div.classList.add("profile-layout");
  const h1 = document.createElement("h1");
  h1.classList.add("profile-layout__title");
  h1.innerHTML = title;
  const p = document.createElement("p");
  p.classList.add("profile-layout__subtitle");
  p.innerHTML = subtitle;
  div.appendChild(h1);
  div.appendChild(p);
  document.querySelector("body").appendChild(div);
};

export default ProfileLayout;
