const params = new URLSearchParams(window.location.search);
const link = params.get("link");

const redirects = {
  discord: "https://discord.gg/Dbv9BKGXpD",
  github: "https://github.com/traficoo",
  x: "https://x.com/VenirPessi"
};

const message = document.getElementById("message");
const info = document.getElementById("info");

if (link && redirects[link]) {
  message.textContent = `Redirection vers ${link}...`;
  info.textContent = "Vous allez être redirigé dans 1 seconde.";
  setTimeout(() => {
    window.location.href = redirects[link];
  }, 1000);
} else {
  message.textContent = "Lien invalide.";
  info.textContent = "Aucun lien de redirection trouvé pour : " + (link || "aucun paramètre");
}
