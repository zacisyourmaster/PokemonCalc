const typeChart = {
  Normal: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 1.0,
    Poison: 1.0,
    Ground: 1.0,
    Rock: 0.5,
    Bug: 1.0,
    Ghost: 0.0,
    Steel: 0.5,
    Fire: 1.0,
    Water: 1.0,
    Grass: 1.0,
    Electric: 1.0,
    Psychic: 1.0,
    Ice: 1.0,
    Dragon: 1.0,
    Dark: 1.0,
    Fairy: 1.0,
  },
  Fighting: {
    Normal: 2.0,
    Fighting: 1.0,
    Flying: 0.5,
    Poison: 0.5,
    Ground: 1.0,
    Rock: 2.0,
    Bug: 0.5,
    Ghost: 0.0,
    Steel: 2.0,
    Fire: 1.0,
    Water: 1.0,
    Grass: 1.0,
    Electric: 1.0,
    Psychic: 0.5,
    Ice: 2.0,
    Dragon: 1.0,
    Dark: 2.0,
    Fairy: 0.5,
  },
  Flying: {
    Normal: 1.0,
    Fighting: 2.0,
    Flying: 1.0,
    Poison: 1.0,
    Ground: 1.0,
    Rock: 0.5,
    Bug: 2.0,
    Ghost: 1.0,
    Steel: 0.5,
    Fire: 1.0,
    Water: 1.0,
    Grass: 2.0,
    Electric: 0.5,
    Psychic: 1.0,
    Ice: 1.0,
    Dragon: 1.0,
    Dark: 1.0,
    Fairy: 1.0,
  },
  Poison: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 1.0,
    Poison: 0.5,
    Ground: 0.5,
    Rock: 0.5,
    Bug: 1.0,
    Ghost: 0.5,
    Steel: 0.0,
    Fire: 1.0,
    Water: 1.0,
    Grass: 2.0,
    Electric: 1.0,
    Psychic: 1.0,
    Ice: 1.0,
    Dragon: 1.0,
    Dark: 1.0,
    Fairy: 2.0,
  },
  Ground: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 0.0,
    Poison: 2.0,
    Ground: 1.0,
    Rock: 2.0,
    Bug: 0.5,
    Ghost: 1.0,
    Steel: 2.0,
    Fire: 2.0,
    Water: 1.0,
    Grass: 0.5,
    Electric: 2.0,
    Psychic: 1.0,
    Ice: 1.0,
    Dragon: 1.0,
    Dark: 1.0,
    Fairy: 1.0,
  },
  Rock: {
    Normal: 1.0,
    Fighting: 0.5,
    Flying: 2.0,
    Poison: 1.0,
    Ground: 0.5,
    Rock: 1.0,
    Bug: 2.0,
    Ghost: 1.0,
    Steel: 0.5,
    Fire: 2.0,
    Water: 1.0,
    Grass: 1.0,
    Electric: 1.0,
    Psychic: 1.0,
    Ice: 2.0,
    Dragon: 1.0,
    Dark: 1.0,
    Fairy: 1.0,
  },
  Bug: {
    Normal: 1.0,
    Fighting: 0.5,
    Flying: 0.5,
    Poison: 0.5,
    Ground: 1.0,
    Rock: 1.0,
    Bug: 1.0,
    Ghost: 0.5,
    Steel: 0.5,
    Fire: 0.5,
    Water: 1.0,
    Grass: 2.0,
    Electric: 1.0,
    Psychic: 2.0,
    Ice: 1.0,
    Dragon: 1.0,
    Dark: 2.0,
    Fairy: 0.5,
  },
  Ghost: {
    Normal: 0.0,
    Fighting: 1.0,
    Flying: 1.0,
    Poison: 1.0,
    Ground: 1.0,
    Rock: 1.0,
    Bug: 1.0,
    Ghost: 2.0,
    Steel: 1.0,
    Fire: 1.0,
    Water: 1.0,
    Grass: 1.0,
    Electric: 1.0,
    Psychic: 2.0,
    Ice: 1.0,
    Dragon: 1.0,
    Dark: 0.5,
    Fairy: 1.0,
  },
  Steel: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 1.0,
    Poison: 1.0,
    Ground: 1.0,
    Rock: 2.0,
    Bug: 1.0,
    Ghost: 1.0,
    Steel: 0.5,
    Fire: 0.5,
    Water: 0.5,
    Grass: 1.0,
    Electric: 0.5,
    Psychic: 1.0,
    Ice: 2.0,
    Dragon: 1.0,
    Dark: 1.0,
    Fairy: 2.0,
  },
  Fire: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 1.0,
    Poison: 1.0,
    Ground: 1.0,
    Rock: 0.5,
    Bug: 2.0,
    Ghost: 1.0,
    Steel: 2.0,
    Fire: 0.5,
    Water: 0.5,
    Grass: 2.0,
    Electric: 1.0,
    Psychic: 1.0,
    Ice: 2.0,
    Dragon: 0.5,
    Dark: 1.0,
    Fairy: 1.0,
  },
  Water: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 1.0,
    Poison: 1.0,
    Ground: 2.0,
    Rock: 2.0,
    Bug: 1.0,
    Ghost: 1.0,
    Steel: 1.0,
    Fire: 2.0,
    Water: 0.5,
    Grass: 0.5,
    Electric: 1.0,
    Psychic: 1.0,
    Ice: 1.0,
    Dragon: 0.5,
    Dark: 1.0,
    Fairy: 1.0,
  },
  Grass: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 0.5,
    Poison: 0.5,
    Ground: 2.0,
    Rock: 2.0,
    Bug: 0.5,
    Ghost: 1.0,
    Steel: 0.5,
    Fire: 0.5,
    Water: 2.0,
    Grass: 0.5,
    Electric: 1.0,
    Psychic: 1.0,
    Ice: 1.0,
    Dragon: 0.5,
    Dark: 1.0,
    Fairy: 1.0,
  },
  Electric: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 2.0,
    Poison: 1.0,
    Ground: 0.0,
    Rock: 1.0,
    Bug: 1.0,
    Ghost: 1.0,
    Steel: 1.0,
    Fire: 1.0,
    Water: 2.0,
    Grass: 0.5,
    Electric: 0.5,
    Psychic: 1.0,
    Ice: 1.0,
    Dragon: 0.5,
    Dark: 1.0,
    Fairy: 1.0,
  },
  Psychic: {
    Normal: 1.0,
    Fighting: 2.0,
    Flying: 1.0,
    Poison: 2.0,
    Ground: 1.0,
    Rock: 1.0,
    Bug: 1.0,
    Ghost: 1.0,
    Steel: 0.5,
    Fire: 1.0,
    Water: 1.0,
    Grass: 1.0,
    Electric: 1.0,
    Psychic: 0.5,
    Ice: 1.0,
    Dragon: 1.0,
    Dark: 0.0,
    Fairy: 1.0,
  },
  Ice: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 2.0,
    Poison: 1.0,
    Ground: 2.0,
    Rock: 1.0,
    Bug: 1.0,
    Ghost: 1.0,
    Steel: 0.5,
    Fire: 0.5,
    Water: 0.5,
    Grass: 2.0,
    Electric: 1.0,
    Psychic: 1.0,
    Ice: 0.5,
    Dragon: 2.0,
    Dark: 1.0,
    Fairy: 1.0,
  },
  Dragon: {
    Normal: 1.0,
    Fighting: 1.0,
    Flying: 1.0,
    Poison: 1.0,
    Ground: 1.0,
    Rock: 1.0,
    Bug: 1.0,
    Ghost: 1.0,
    Steel: 0.5,
    Fire: 1.0,
    Water: 1.0,
    Grass: 1.0,
    Electric: 1.0,
    Psychic: 1.0,
    Ice: 1.0,
    Dragon: 2.0,
    Dark: 1.0,
    Fairy: 0.0,
  },
  Dark: {
    Normal: 1.0,
    Fighting: 0.5,
    Flying: 1.0,
    Poison: 1.0,
    Ground: 1.0,
    Rock: 1.0,
    Bug: 1.0,
    Ghost: 2.0,
    Steel: 1.0,
    Fire: 1.0,
    Water: 1.0,
    Grass: 1.0,
    Electric: 1.0,
    Psychic: 2.0,
    Ice: 1.0,
    Dragon: 1.0,
    Dark: 0.5,
    Fairy: 0.5,
  },
  Fairy: {
    Normal: 1.0,
    Fighting: 2.0,
    Flying: 1.0,
    Poison: 0.5,
    Ground: 1.0,
    Rock: 1.0,
    Bug: 1.0,
    Ghost: 1.0,
    Steel: 0.5,
    Fire: 0.5,
    Water: 1.0,
    Grass: 1.0,
    Electric: 1.0,
    Psychic: 1.0,
    Ice: 1.0,
    Dragon: 2.0,
    Dark: 2.0,
    Fairy: 1.0,
  },
};
const typeColors = {
  Normal: "#E1DED9",
  Fire: "#F08030",
  Water: "#6890F0",
  Electric: "#F8D030",
  Grass: "#78C850",
  Ice: "#98D8D8",
  Fighting: "#C03028",
  Poison: "#A040A0",
  Ground: "#E0C068",
  Flying: "#A890F0",
  Psychic: "#F85888",
  Bug: "#A8B820",
  Rock: "#B8A038",
  Ghost: "#705898",
  Dark: "#2F251E",
  Steel: "#B8B8D0",
  Fairy: "#EE99AC",
  Dragon: "#7038F8",
};

const types = ["Normal", null];
const primary = document.querySelectorAll(".primaryType");
const secondary = document.querySelectorAll(".secondaryType");

function weakness(type1, type2 = null) {
  var neutral = [];
  var fourx = [];
  var twox = [];
  var halfx = [];
  var qtrx = [];
  var zerox = [];

  for (const key in typeChart) {
    if (type2 === null || type1 === type2) {
      if (typeChart[key][type1] == 1.0) neutral.push(key);
      else if (typeChart[key][type1] == 2.0) twox.push(key);
      else if (typeChart[key][type1] == 0.5) halfx.push(key);
      else if (typeChart[key][type1] == 0.0) zerox.push(key);
    } else {
      if (typeChart[key][type1] * typeChart[key][type2] == 1.0)
        neutral.push(key);
      else if (typeChart[key][type1] * typeChart[key][type2] == 2.0)
        twox.push(key);
      else if (typeChart[key][type1] * typeChart[key][type2] == 0.5)
        halfx.push(key);
      else if (typeChart[key][type1] * typeChart[key][type2] == 0.0)
        zerox.push(key);
      else if (typeChart[key][type1] * typeChart[key][type2] == 4.0)
        fourx.push(key);
      else if (typeChart[key][type1] * typeChart[key][type2] == 0.25)
        qtrx.push(key);
    }
  }

  var defenses = {};

  if (fourx.length > 0) defenses.fourx = fourx;
  if (twox.length > 0) defenses.twox = twox;
  if (neutral.length > 0) defenses.neutral = neutral;
  if (halfx.length > 0) defenses.halfx = halfx;
  if (qtrx.length > 0) defenses.qtrx = qtrx;
  if (zerox.length > 0) defenses.zerox = zerox;

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
window.addEventListener("resize", handleResize);
document.addEventListener("DOMContentLoaded", () => {
  handleResize();
  updateResults("Normal");
  const primary = document.querySelectorAll(".primaryType");
  const secondary = document.querySelectorAll(".secondaryType");
  for (let i = 0; i < primary.length; i++) {
    primary[i].addEventListener("click", () => {
      types[0] = primary[i].getAttribute("ptype");
      updateResults(types[0], types[1]);
    });
  }
  for (let i = 0; i < secondary.length; i++) {
    secondary[i].addEventListener("click", () => {
      types[1] = secondary[i].getAttribute("ptype");
      if (types[1] === "null") types[1] = types[0];
      updateResults(types[0], types[1]);
    });
  }

  function updateResults(t1, t2) {
    const result = weakness(t1, t2);
    const defense = document.querySelector(".defense");
    defense.innerHTML = "";

    for (const key in result) {
      const heading = document.createElement("h3");
      heading.className = "fs-5 mt-4";
      if (key == "fourx") heading.textContent = "Takes 4x Damage From";
      if (key == "twox") heading.textContent = "Takes 2x Damage From";
      if (key == "neutral") heading.textContent = "Takes 1x Damage From";
      if (key == "halfx") heading.textContent = "Takes 1/2x Damage From";
      if (key == "qtrx") heading.textContent = "Takes 1/4x Damage From";
      if (key == "zerox") heading.textContent = "Takes 0x Damage From";
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

  //form
  var form = document.querySelector(".poke-search form");
  fetch("completePokedex.json")
    .then((response) => response.json())
    .then((data) => {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const notFound = document.querySelector(".nf");
        var pokemonName = document.querySelector("#pname").value.trim();
        var pokemonData = data.find(
          (pokemon) => pokemon.Name.toLowerCase() === pokemonName.toLowerCase()
        );

        if (pokemonData) {
          var typeInfo = pokemonData.Types;
          updateResults(typeInfo[0], typeInfo[1]);
          notFound.setAttribute("style", "display: none !important;");
        } else {
          notFound.setAttribute("style", "display: contents;");
        }
      });
    })
    .catch((error) => console.error("Error loading JSON file:", error));
});
