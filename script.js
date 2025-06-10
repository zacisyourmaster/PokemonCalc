let typeChart = {};
let typeColors = {};

function weakness(type1, type2 = null) {
    const defenses = {
        fourx: [],
        twox: [],
        neutral: [],
        halfx: [],
        qtrx: [],
        zerox: []
    };


    for (const key in typeChart) {
        if (type2 === null || type1 === type2) {
            if (typeChart[key][type1] == 1.0) defenses.neutral.push(key);
            else if (typeChart[key][type1] == 2.0) defenses.twox.push(key);
            else if (typeChart[key][type1] == 0.5) defenses.halfx.push(key);
            else if (typeChart[key][type1] == 0.0) defenses.zerox.push(key);
        } else {
            if (typeChart[key][type1] * typeChart[key][type2] == 1.0)
                defenses.neutral.push(key);
            else if (typeChart[key][type1] * typeChart[key][type2] == 2.0)
                defenses.twox.push(key);
            else if (typeChart[key][type1] * typeChart[key][type2] == 0.5)
                defenses.halfx.push(key);
            else if (typeChart[key][type1] * typeChart[key][type2] == 0.0)
                defenses.zerox.push(key);
            else if (typeChart[key][type1] * typeChart[key][type2] == 4.0)
                defenses.fourx.push(key);
            else if (typeChart[key][type1] * typeChart[key][type2] == 0.25)
                defenses.qtrx.push(key);
        }
    }
    
    for (const key in defenses){
        if (defenses[key].length===0)
            delete defenses[key];
    }

    return defenses;
}
function handleResize() {
    const main = document.querySelector("main");
    const types = document.querySelector("#types");
    const def = document.querySelector("#def");
    if (window.innerWidth < 768) {
        main.className = "container-fluid";
        types.className = "flex-auto";
        def.className = "flex-auto container-fluid";
    } else {
        types.className = "flex-auto w-50 pe-5";
        def.className = "flex-auto w-50 ps-5 d-sm-block";
        main.className = "container-fluid px-4 pt-0 pb-4 d-flex content-wide";
    }
}

function updateResults(t1, t2) {
    const result = weakness(t1, t2);
    const defense = document.querySelector(".defense");
    defense.innerHTML = "";
    const keyMapping = {
        fourx: "Takes 4x Damage From",
        twox: "Takes 2x Damage From",
        neutral: "Takes 1x Damage From",
        halfx: "Takes 1/2x Damage From",
        qtrx: "Takes 1/4x Damage From",
        zerox: "Takes 0x Damage From",
    };
    for (const key in result) {
        const heading = document.createElement("h3");
        heading.className = "fs-5 mt-4";
        heading.textContent = keyMapping[key];

        const types = document.createElement("p");
        types.className = "text-justify";
        const ar = result[key];

        for (const element of ar) {
            const span = document.createElement("span");
            span.className = "results";
            span.style.background = [typeColors[element]];
            span.style.margin = ".25rem";
            span.style.textShadow =
                "0 1px 0 black, 0 0 1px rgba(0,0,0,.6), 0 0 2px rgba(0,0,0,.7), 0 0 3px rgba(0,0,0,.8), 0 0 4px rgba(0,0,0,.9)";
            span.textContent = element;
            types.appendChild(span);
        }
        defense.appendChild(heading);
        defense.appendChild(types);
    }
}

window.addEventListener("resize", handleResize); //handle window resize

// const primary = document.querySelectorAll(".primaryType");
// const secondary = document.querySelectorAll(".secondaryType");
document.addEventListener("DOMContentLoaded", () => {
    handleResize();

    fetch("./typeData.json")
        .then((response) => response.json())
        .then((data) => {
            typeChart = data.typeChart;
            typeColors = data.typeColors;

            updateResults("Normal");

            const primary = document.querySelectorAll(".primaryType");
            const secondary = document.querySelectorAll(".secondaryType");
            let types = ["Normal", null];

            primary.forEach((element) => {
                //handle first type
                element.addEventListener("click", () => {
                    types[0] = element.getAttribute("ptype");
                    updateResults(types[0], types[1]);
                });
            });

            secondary.forEach((element) => {
                //handle second type
                element.addEventListener("click", () => {
                    types[1] = element.getAttribute("ptype");
                    if (types[1] === "null") types[1] = types[0];
                    updateResults(types[0], types[1]);
                });
            });

            //form
            const form = document.querySelector(".poke-search form"); //handle form submission
            let pokedexData = null;

            fetch("completePokedex.json")
                .then((response) => response.json())
                .then((data) => {
                    pokedexData = data;
                    form.addEventListener("submit", (event) => {
                        event.preventDefault();
                        const notFound = document.querySelector(".nf");
                        const pokemonName = document
                            .querySelector("#pname")
                            .value.trim();

                        const pokemonData = pokedexData.find(
                            (pokemon) =>
                                pokemon.Name.toLowerCase() ===
                                pokemonName.toLowerCase()
                        );

                        if (pokemonData) {
                            const typeInfo = pokemonData.Types;
                            updateResults(typeInfo[0], typeInfo[1]);
                            notFound.setAttribute(
                                "style",
                                "display: none !important;"
                            );
                        } else {
                            notFound.setAttribute(
                                "style",
                                "display: contents;"
                            );
                        }
                    });
                });
        })
        .catch((error) => console.error("Error loading JSON file:", error));
});
