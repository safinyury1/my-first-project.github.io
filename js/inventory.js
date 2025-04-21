const table = document.getElementById("inventory-table");
const form = document.getElementById("add-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const category = document.getElementById("category").value.trim();
  const quantity = document.getElementById("quantity").value.trim();

  if (name && category && quantity) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${category}</td>
      <td>${quantity}</td>
      <td><button class="btn delete">Удалить</button></td>
    `;
    table.appendChild(row);
    form.reset();
  }
});

table.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }
});