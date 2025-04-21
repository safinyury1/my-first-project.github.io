const allowedRoles = ["Администратор"]; // изменять
const userData = JSON.parse(localStorage.getItem("user"));

if (!userData || !allowedRoles.includes(userData.role)) {
  alert("У вас нет доступа к этой странице.");
  window.location.href = "login.html";
}


  document.addEventListener("DOMContentLoaded", () => {
const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const role = document.getElementById("role").value;

  if (!username) return alert("Введите имя пользователя");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${username}</td>
    <td>${role}</td>
    <td>
      <button class="btn small edit-btn">Редактировать</button>
      <button class="btn small danger delete-btn">Удалить</button>
    </td>
  `;
  userTable.appendChild(row);
  userForm.reset();
});

userTable.addEventListener("click", (e) => {
  const row = e.target.closest("tr");

  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Удалить пользователя?")) row.remove();
  }

  if (e.target.classList.contains("edit-btn")) {
    const nameCell = row.children[0];
    const roleCell = row.children[1];
    const newName = prompt("Новое имя пользователя:", nameCell.textContent);
    if (newName) nameCell.textContent = newName;

    const newRole = prompt("Новая роль:", roleCell.textContent);
    if (newRole) roleCell.textContent = newRole;
  }
});
const newsForm = document.getElementById("newsForm");
const newsList = document.getElementById("newsList");

newsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("news-title").value.trim();
  const content = document.getElementById("news-content").value.trim();

  if (!title || !content) return alert("Заполните все поля");

  const li = document.createElement("li");
  const date = new Date().toLocaleDateString("ru-RU");
  li.innerHTML = `[${date}] <strong>${title}</strong>: ${content}`;
  newsList.prepend(li);

  newsForm.reset();
});
});