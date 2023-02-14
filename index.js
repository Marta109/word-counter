const changeColorBtn = document.querySelector(".btn-primary"),
  calculateBtn = document.querySelector(".calculate"),
  alertCaluletedValue = document.getElementById("liveAlertCaluletedValue");

changeColorBtn,
  addEventListener(
    "click",
    (e) => {
      const mainCanvas = document.querySelector(".canvas");
      if (e.target == changeColorBtn) {
        mainCanvas.style.background = genretRandomColor();
      }
    },
    {capture: true}
  );

function genretRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

calculateBtn.addEventListener("click", (e) => {
  const textarea = document.querySelector(".textarea");
  let str = textarea.value;
  if (str.length === 0 || str.replace(/\s/g, "").length === 0) {
    alert("Incorrectly entered data", "danger");
  } else {
    textCounter(str);
  }
});

function alert(message, type) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertCaluletedValue.append(wrapper);
}

function textCounter(str) {
  let wordCounty = 0,
    letterCounty = 0,
    numberCounty = 0;

  for (let i = 0; i < str.length; i++) {
    str[i] != " " && isNaN(str[i])
      ? letterCounty++
      : str[i] != " " && !isNaN(str[i])
      ? numberCounty++
      : "";
  }
  let strArr = str
    .split(" ")
    .join("!!")
    .split(",")
    .join("!!")
    .split(".")
    .join("!!")
    .split("!!");
  console.log(strArr);
  strArr.forEach((el) => {
    if (el.length >= 2 && isNaN(el)) {
      wordCounty++;
    }
  });

  alert(
    ` string is "${str}" <br>
      number of letters = ${letterCounty} <br>
      number of words = ${wordCounty} <br>
      number of numbers = ${numberCounty}`,
    "success"
  );
}
