
function checkAlreadyLoggedIn() {
  if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "home.html";
  }
}

function checkLoginStatus() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Oam" && password === "25433") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("popup").style.display = "block";
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
