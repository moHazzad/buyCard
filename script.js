let serial = 0;

function buyItem(e) {
  // Get item details from clicked row
  const name = e.target.parentNode.parentNode.children[0].innerText;
  const price = parseFloat(e.target.parentNode.parentNode.children[2].children[0].innerText);
  const quantity = parseFloat(e.target.parentNode.parentNode.children[3].children[0].innerText);
  const total = price * quantity;

  // Check if a row with the same item name already exists
  const tableRows = document.querySelectorAll('#tableBody tr');
  let existingRow;
  tableRows.forEach(row => {
    if (row.children[1].innerText === name) {
      existingRow = row;
    }
  });

  if (existingRow) {
    // Update quantity and total for existing row
    const existingQuantity = parseFloat(existingRow.children[3].innerText);
    const existingTotal = parseFloat(existingRow.children[4].innerText);
    existingRow.children[3].innerText = existingQuantity + quantity;
    existingRow.children[4].innerText = existingTotal + total;
  } else {
    // Add new row to table
    serial++;
    tableBody(serial, name, price, quantity, total);
  }
}

function tableBody(serial,name,price,quantity,total,){
    const container = document.getElementById('tableBody')
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${price} </td>
    <td>${quantity}</td>
    <td>${total}</td>
`;
container.appendChild(tr)
}


document.getElementById("cofeeBtn").addEventListener("click", buyItem);
document.getElementById("pizza").addEventListener("click", buyItem);
document.getElementById("pasta").addEventListener("click", buyItem);
document.getElementById("burger").addEventListener("click", buyItem);
document.getElementById("showrma").addEventListener("click", buyItem);
document.getElementById("chicken").addEventListener("click", buyItem);









