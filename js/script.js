// 1

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("I'm a button");
  console.log(this);
});

// btn.onclick = function () {
//     console.log("I'm a button");
// };

// 2

countButton = document.querySelector("button[type='button']");
const textArea = document.querySelector("input[type='text']");
const countResult = document.querySelector(".count");

function countChar() {
  const charCounter = textArea.value.trim().length;
  countResult.innerHTML = charCounter;
}

countButton.addEventListener("click", countChar);

// let len = 0;
// textArea.addEventListener("keyup", function () {
//   len = this.value.trim().length;
//   console.log(len);
// });
// countButton.addEventListener("click", function () {
//   charCount.innerHTML = len;
// });
