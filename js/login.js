const login__usuario = document.querySelector(".login");

login__usuario.addEventListener("submit", (clique) => {
  clique.preventDefault();
  window.location = "produtos.html";
});