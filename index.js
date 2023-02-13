// let str = prompt("Please enter the string", "I am a student in tumo labs");

if (str.length === 0) {
  alert("Not correct enter");
} else {
  checkString(str);
}

// let str1 = str.replace(/ /g, "");
// console.log(str);
// console.log(str1);

function checkString(str) {
  let wordCounty = 0,
    letterCounty = 0,
    numberCounty = 0;

  for (let i = 0; i < str.length; i++) {
    // if (str[i] != " " && isNaN(str[i])) letterCounty++;
    str[i] != " " && isNaN(str[i])
      ? letterCounty++
      : str[i] != " " && !isNaN(str[i])
      ? numberCounty++
      : "";
  }
  let strArr = str.split(" ");
  console.log(strArr);
  strArr.forEach((el) => {
    if (el.length >= 2 && isNaN(el)) {
      wordCounty++;
    }
  });

  console.log(`string is "${str}"`);
  console.log(`number of letters = ${letterCounty}`);
  console.log(`number of words = ${wordCounty}`);
  console.log(`number of numbers = ${numberCounty}`);
}
