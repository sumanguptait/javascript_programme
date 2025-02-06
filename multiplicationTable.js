// Print all the multiplication tables with numbers from 1 to 10

let result = "";
for (let i = 1; i <= 10; i++) {
  result += `<h3>Multiplication Table for ${i}</h3>`;

  for (let j = 1; j <= 10; j++) {
    result += `${i} x ${j} = ${i * j} <br>`;
  }
}
document.getElementById("table").innerHTML = result;
