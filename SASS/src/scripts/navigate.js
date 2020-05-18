const main = document.querySelector("#ajax-main");
const navButs = document.querySelectorAll(".navBut");
const home = document.querySelector("#homeBut");

//Go to home page when loads
window.onload = function () {
  navigate(navButs[0].getAttribute("link"));
  hashChange(navButs[0].getAttribute("dest"));
};

//change the hash when navigates --> give browser history
function hashChange(newHash) {
  window.location.hash = newHash;
  console.log(window.location.hash);
}

//insert the oage ate fetch
function insertPage(html) {
  main.innerHTML = html;
}

//Navigate fetch
function navigate(URL) {
  fetch(URL)
    .then((res) => res.text())
    .then((html) => {
      insertPage(html);
    });
}

//When hash changes go through the nav buttons and if the attribute dest === hash, navigate to he attribute link
window.onhashchange = function (event) {
  navButs.forEach((button) => {
    if (`#${button.getAttribute("dest")}` === window.location.hash) {
      navigate(button.getAttribute("link"));
    }
  });
};

// Navigation
navButs.forEach((button, index) => {
  if (button.hasAttribute("locked")) {
    button.onclick = function () {
      if (prompt("type the password", "password...") === "29112001") {
        navigate(button.getAttribute("link"));
        hashChange(button.getAttribute("dest"));
      } else {
        alert("wrong password");
      }
    };
  } else {
    //if the button doesn't have locked (persnolized attribute) content, falls in here
    button.onclick = function () {
      navigate(button.getAttribute("link"));
      hashChange(button.getAttribute("dest"));
    };
  }
});

// when user logs in add diferent stuff to home => if login status is 200, else, keep default
