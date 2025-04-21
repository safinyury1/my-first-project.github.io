document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const role = document.getElementById("login-role").value;

    if (!username || !password) {
      alert("Введите имя и пароль.");
      return;
    }
    if (password !== "admin") {
      alert("Неверный пароль.");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ username, role }));

    window.location.href = "index.html";
  });