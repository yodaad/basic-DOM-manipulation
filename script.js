//const p = document.querySelector("p");
//const parrafo = document.getElementsByClassName(".parrafo");
//const pid = document.getElementById("pid");

const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btn-calcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValue);

function sumarInputValue(event) {
  event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}

/* console.log(input.value);

console.log({
  h1,
  p,
  parrafo,
  pid,
  input,
});

h1.innerHTML = "Acabo de cambiar este texto con JS <br> Y esta es otra frase.";
h1.innerText = "Acabo de cambiar este texto con JS <br> Y esta es otra frase.";

// console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "rojo");

h1.classList.add("rojo");
h1.classList.remove("verde");

//input.value = "456";
input.placeholder = "Modificado con JS";

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
console.log(img);

pid.innerHTML = " ";
pid.append(img); */
