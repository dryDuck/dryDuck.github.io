// get Tag
const home = document.querySelector("#hm");
const projects = document.querySelector("#pr");
const contact = document.querySelector("#co");

home.addEventListener("click", function () {
  clickLink(home, projects, contact);
});

projects.addEventListener("click", function () {
  clickLink(projects, home, contact);
});

contact.addEventListener("click", function () {
  clickLink(contact, home, projects);
});

function clickLink(a, b, c) {
  a.classList.add("active");
  b.classList.remove("active");
  c.classList.remove("active");
  return 0;
}
