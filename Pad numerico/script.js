const keyboard = document.getElementById("keyboard");
const display = document.getElementById("display");
const numbers = Array.from({ length: 10 }, (_, i) => i);
let realInput = ""; 

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

function updateDisplay(value) {
  if (value === "clear") {
    realInput = "";
  } else if (realInput.length < 4) {
    realInput += value;
  }
  display.textContent = realInput.padEnd(4, "_").replace(/./g, (c) => (c !== "_" ? "*" : c)) + " ";
}

function createButton(label, className, onClick) {
  const btn = document.createElement("div");
  btn.className = `key ${className}`;
  btn.textContent = label;
  btn.addEventListener("click", onClick);
  return btn;
}

function generateKeyboard() {
  keyboard.innerHTML = "";
  shuffle(numbers).forEach((num) => {
    const key = createButton(num, "", () => {
      updateDisplay(num);
      generateKeyboard();
    });
    key.addEventListener("mouseenter", toggleMasking.bind(null, true));
    key.addEventListener("mouseleave", toggleMasking.bind(null, false));
    keyboard.appendChild(key);
  });

  keyboard.appendChild(createButton("Limpiar", "special", () => updateDisplay("clear")));
  keyboard.appendChild(createButton("Ingresar", "special", () => alert(`Entrada: ${realInput}`)));
}

function toggleMasking(mask) {
  document.querySelectorAll(".key:not(.special)").forEach((key, i) => {
    key.textContent = mask ? "*" : numbers[i];
  });
}

generateKeyboard();






