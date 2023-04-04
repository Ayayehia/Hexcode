let rgbcont = document.querySelector(".rgb-content");
let output = document.querySelector(".output");
let button = document.querySelector("button");

// function onclick() {
//   output.classList.toggle("animation");
// }

button.addEventListener("click", () => {
  let rvalue = document.querySelector("#red").value;
  let bvalue = document.querySelector("#blue").value;
  let gvalue = document.querySelector("#green").value;
  let hexcont = document.querySelector(".hex-content");
  let output = document.querySelector(".output");

  outputColor =
    "#" +
    [rvalue, bvalue, gvalue]
      .map((x) => parseInt(x).toString(16).padStart(2, 0))
      .join("");
  output.innerHTML = outputColor;
  hexcont.style.background = outputColor;
  output.classList.toggle("animation");
});
