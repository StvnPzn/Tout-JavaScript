function getDomaine(txt) {
  if (txt.indexOf("@") > 0) {
    return txt.substring(txt.indexOf("@") + 1);
  } else if (txt.indexOf("://") > 0) {
    if (txt.indexOf("/", 8) > 0) {
      return txt.substring(txt.indexOf("://") + 3, txt.indexOf("/", 8));
    } else {
      return txt.substring(txt.indexOf("://") + 3);
    }
  } else {
    return "";
  }
}

var page = "http://www.toutjavascript.com/reference";
var goog = "https://www.google.fr";
var mail = "jeanjean@gmail.com"

console.log(getDomaine(page));
console.log(getDomaine(goog));
console.log(getDomaine(mail));

// -----------

var ascii = "";

for (var i = 0; i<256; i++) {
  ascii += "<div class='indice'>"+i+"</div>";
  ascii += "<div class='char'>"+String.fromCharCode(i)+"</div>";
  ascii += "<div class ='break'></div>";
}

document.getElementById("ascii").innerHTML = ascii
