let sum = "";
while (true) {
  let value = prompt("masukkan sebuah huruf", '');
  if (!value) break;

  sum += value;
}
alert('Sum : ' + sum);
