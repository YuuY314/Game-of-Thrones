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
                img.src = "https://wiki.geloefogo.com/images/9/96/Stannis_Baratheon_and_Shireen_Baratheon_By_Magali_Villeneuve.jpg";
                img.alt = "Stannis Baratheon";
                kingText.textContent = "Stannis Baratheon";
                break;
            case "lannister":
                name.textContent = "Joffrey Lannister";
                img.src = "https://awoiaf.westeros.org/images/0/08/MagaliVilleneuve_JoffreyBaratheon.jpg";
                img.alt = "Joffrey Lannister";
                kingText.textContent = "Joffrey Lannister";
                break;
            case "targaryen":
                name.textContent = "Daenerys Targaryen";
                img.src = "https://carlybooks.wordpress.com/wp-content/uploads/2023/03/aa.jpg?w=676";
                img.alt = "Daenerys Targaryen";
                kingText.textContent = "Daenerys Targaryen";
                genderText.textContent = "a rainha";
                break;
            case "blackfyre":
                name.textContent = "Aegon Blackfyre";
                img.src = "https://awoiaf.westeros.org/images/thumb/9/95/Borja_Pindado_unexpectedreturn.jpg/572px-Borja_Pindado_unexpectedreturn.jpg";
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