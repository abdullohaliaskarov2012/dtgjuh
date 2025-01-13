let backgroundColor = prompt("Введите цвет фона ");
document.body.style.backgroundColor = backgroundColor;
document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";


let textColor = prompt("Введите цвет текста");

let loremText = "";
for (let i = 0; i < 1000; i++) {
  loremText += "Abdulloh\n ";
}

let textElement = document.createElement("p");
textElement.textContent = loremText.trim();
textElement.style.color = textColor;
textElement.style.fontSize = "32px";


document.body.appendChild(textElement);
