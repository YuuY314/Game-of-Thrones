const houseCards = document.querySelectorAll(".house_cards");
const candidateContainer = document.querySelector("#candidate");
const hailKingText = document.querySelector("#chosen_king");
const kingText = document.querySelector("#chosen");
const genderText = document.querySelector("#gender");
const workInProgressLink = document.querySelectorAll(".work_in_progress");

houseCards.forEach((card) => {
    card.addEventListener("click", () => {
        let name = candidateContainer.querySelector("h2");
        let img = candidateContainer.querySelector("img");
        let button = candidateContainer.querySelector("button");

        img.classList.remove("hide");
        button.classList.remove("hide");

        button.id = "choose";

        genderText.textContent = "o rei";

        hailKingText.classList.add("hidden");

        switch(card.id) {
            case "baratheon":
                name.textContent = "Stannis Baratheon";
                img.src = "../img/stannis.webp";
                img.alt = "Stannis Baratheon";
                kingText.textContent = "Stannis Baratheon";
                break;
            case "lannister":
                name.textContent = "Joffrey Lannister";
                img.src = "../img/joffrey.webp";
                img.alt = "Joffrey Lannister";
                kingText.textContent = "Joffrey Lannister";
                break;
            case "targaryen":
                name.textContent = "Daenerys Targaryen";
                img.src = "../img/daenerys.webp";
                img.alt = "Daenerys Targaryen";
                kingText.textContent = "Daenerys Targaryen";
                genderText.textContent = "a rainha";
                break;
            case "blackfyre":
                name.textContent = "Aegon Blackfyre";
                img.src = "../img/aegon.webp";
                img.alt = "Aegon Blackfyre";
                kingText.textContent = "Aegon Blackfyre";
                break;
        }
    });
});

workInProgressLink.forEach((link) => {
    link.addEventListener("click", () => {
        alert("Estamos trabalhando para a criação desta página");
    });
});

document.addEventListener("click", (e) => {
    if(e.target.id == "choose"){
        hailKingText.classList.remove("hidden");
    }
});