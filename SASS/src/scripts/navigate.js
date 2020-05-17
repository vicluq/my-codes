function navigate(URL) {
  fetch(URL)
    .then((res) => res.text())
    .then((html) => {
      insertPage(html);
    });
}

function insertPage(html) {
  main.innerHTML = html;
}

const main = document.querySelector("#ajax-main");
const lockedContent = document.querySelectorAll("[locked]");
const home = document.querySelector("#homeBut")

lockedContent.forEach((button, index) => {
  button.onclick = function () {
    if (prompt("type the password", 'password...') === "29112001") {
      navigate(button.getAttribute("link"));
    } else {
      alert("wrong password");
    }
  };
});

home.onclick = function () {
    navigate(home.getAttribute("link"));
}

// when user logs in add diferent stuff to home => if login status is 200, else, keep default
