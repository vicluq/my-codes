"use strict";function navigate(t){fetch(t).then(function(t){return t.text()}).then(function(t){insertPage(t)})}function insertPage(t){main.innerHTML=t}var main=document.querySelector("#ajax-main"),lockedContent=document.querySelectorAll("[locked]"),home=document.querySelector("#homeBut");lockedContent.forEach(function(t,e){t.onclick=function(){"29112001"===prompt("type the password","password...")?navigate(t.getAttribute("link")):alert("wrong password")}}),home.onclick=function(){navigate(home.getAttribute("link"))};