const changeColorBtn = document.querySelector(".btn-primary"),
  textarea = document.querySelector(".textarea");

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
  const chars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

textarea.addEventListener("input", (e) => {
  textCounter(e.target.value);
});

function textCounter(str) {
  const charWithoutSpace = document.querySelector(".charWithoutSpace"),
    chars = document.querySelector(".chars"),
    words = document.querySelector(".words"),
    sentences = document.querySelector(".sentences"),
    numbers = document.querySelector(".numbers"),
    symbols = document.querySelector(".symbols"),
    letters = document.querySelector(".letters");

  chars.innerHTML = str.length;
  sentences.innerHTML = sentenceCounter(str);
  words.innerHTML = wordCounter(str);
  letters.innerHTML = letterCounter(str);
  numbers.innerHTML = str.replace(/[^0-9]/g, "").length;
  charWithoutSpace.innerHTML = str.replace(/\s/g, "").length;
  symbols.innerHTML = str.replace(/[a-zа-яё0-9\s]/gi, "").length;
}

function letterCounter(str) {
  let letterCounty = 0;
  str = str.replace(/[^a-zа-яё\s]/gi, "").split("");
  for (let i = 0; i < str.length; i++) {
    str[i] != " " && isNaN(str[i]) ? letterCounty++ : "";
  }

  return letterCounty;
}
function wordCounter(str) {
  let wordCounty = 0;
  str
    .split(" ")
    .join("!!")
    .split(",")
    .join("!!")
    .split(".")
    .join("!!")
    .split("!!")
    .forEach((el) => {
      if (el.length >= 1 && isNaN(el)) {
        wordCounty++;
      }
    });
  return wordCounty;
}

function sentenceCounter(str) {
  validateText(str);
  return str.split(/[.!?]+\s/).filter(Boolean).length;
}

const validateText = (str) => {
  const errorText = document.querySelector(".error-text");
  let strArr = str.split(/[.!?]+\s/).filter(Boolean);
  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== "") {
      strArr[i][0] == strArr[i][0].toUpperCase()
        ? (errorText.textContent = "")
        : (errorText.textContent =
            "New sentence must start with a capital letter");
    }
  }

  if (strArr.length == 0) {
    errorText.textContent = "";
  }
};
