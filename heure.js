function heure() {
    const maintenant = new Date();

    const heures = String(maintenant.getHours()).padStart(2, "0");
    const minutes = String(maintenant.getMinutes()).padStart(2, "0");

    document.querySelector("#heures").textContent = heures;
    document.querySelector("#minutes").textContent = minutes;
}

heure();
setInterval(heure, 1000);