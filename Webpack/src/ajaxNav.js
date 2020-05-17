const button = document.getElementById("ajaxTest");
const div = document.querySelector("#content");

button.onclick = function (event) {
  button.classList.toggle("selected");
  if (button.classList.contains("selected")) {
    const link = button.getAttribute("link");

    fetch(link)
      .then((res) => res.text())
      .then((html) => (div.innerHTML = html))
      .catch((err) => {
        console.log(err);
      });
  } else {
    const back = button.getAttribute("back");

    fetch(back)
      .then((res) => res.text())
      .then((html) => (div.innerHTML = html))
      .catch((err) => {
        console.log(err);
      });
  }
};
