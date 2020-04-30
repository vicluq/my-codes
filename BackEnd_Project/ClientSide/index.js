const loadingGIF = document.createElement("img").src = "pacman.gif"

function showLoadingGif () {
    document.getElementById("voltarButtom").style.display = "none";
    document.getElementById("logDiv").style.display = "none";
    document.getElementById("loadingGif").style.display = "";
}

function stopLoadingGIF () {
    document.getElementById("voltarButtom").style.display = "";
    document.getElementById("logDiv").style.display = "";
    document.getElementById("loadingGif").style.display = "none";
}

document.getElementById("loadingGif").style.display = "none";
document.getElementById("registerDiv").style.display = "none";
document.getElementById("logDiv").style.display = "none";
document.getElementById("respDiv").style.display = "none";
document.getElementById("voltarButtom").style.display = "none";

function register() {
  document.getElementById("registerDiv").style.display = "";
  document.getElementById("voltarButtom").style.display = "";
  document.getElementById("mainDiv").style.display = "none";
  document.getElementById("logDiv").style.display = "none";
  document.getElementById("respDiv").style.display = "none";
}

function login() {
  document.getElementById("registerDiv").style.display = "none";
  document.getElementById("voltarButtom").style.display = "";
  document.getElementById("mainDiv").style.display = "none";
  document.getElementById("logDiv").style.display = "";
  document.getElementById("respDiv").style.display = "none";
}

const goBackButtom = document.getElementById("voltarButtom");

goBackButtom.addEventListener("click", function () {
  window.location.reload();
});

const urlRegister = "http://localhost:8080/register";

//creating object to send on past request body

const form = document.getElementById("regForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //para que o form não mude a url e tente mandar para algum lugar, pois eu q vou definir isso

  const cpf = document.getElementById("cpfreg").value;
  const senha = document.getElementById("senhareg").value;
  const CEP = document.getElementById("cepreg").value;

  const userData = {
    cpf,
    senha,
    CEP,
  };

  const dataSend = JSON.stringify(userData);
  console.log(dataSend);

  fetch(urlRegister, {
    method: "POST",
    body: dataSend,
    headers: {
      "content-type": "application/json",
    },
  }).catch((err) => {
    console.log(err);
  });
});

const urlLogin = "http://localhost:8080/login";

const formLog = document.getElementById("logForm");
formLog.addEventListener("submit", (event) => {
  
    event.preventDefault();
    
    const cpfLog = document.getElementById("cpflog").value;
    const senhaLog = document.getElementById("senhalog").value;

    const userLogin = {
      cpfLog,
      senhaLog,
    };
  
    if (cpfLog.length != 11 || senhaLog.length < 6) {
    alert("insert the correct cpf and password");
        } 
  
  else {
        
    showLoadingGif()    

    const parsedLogin = JSON.stringify(userLogin);

    fetch(urlLogin, {
      method: "POST",
      body: parsedLogin,
      headers: {
        "content-type": "application/json",
      },
    }).then((resp) => {
      
        if (resp.status == 422) {
        console.log(resp)
        stopLoadingGIF()
        document.getElementById("respDiv").style.display = "";
        document.getElementById("loginResp").innerText = `Incorrect information!`;

      } else if (resp.status == 200){
          console.log(resp)

      }
    });
  }
});
