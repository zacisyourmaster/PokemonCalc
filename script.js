document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".poke-search form");
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
      Normal: 1.0,
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
      Psychic: 1.0,
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
      Ice: 1.0,
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
      Ghost: 2.0,
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
      Rock: 2.0,
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
  function weakness(type1, type2) {
    var neutral = [];
    var fourx = [];
    var twox = [];
    var halfx = [];
    var qtrx = [];
    var zerox = [];

    for (const key in typeChart) {
      if (type2 === undefined) {
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
    var defense = [];
    if (type2 != undefined) {
      return [fourx, twox, neutral, halfx, qtrx, zerox];
    } else {
      twox.length > 0 ? defense.push(twox) : "";
      neutral.length > 0 ? defense.push(neutral) : "";
      halfx.length > 0 ? defense.push(halfx) : "";
      zerox.length > 0 ? defense.push(zerox) : "";
    }
    return defense;
  }
  // Load the JSON file
  fetch("pokedex1.json")
    .then((response) => response.json())
    .then((data) => {
      // Add a submit event listener to the form
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the value entered by the user
        var pokemonName = document.getElementById("pname").value;

        // Find the Pokemon data in the loaded JSON file
        var pokemonData = data.find(
          (pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase()
        );
        if (pokemonData) {
          var typeInfo = pokemonData.pdtype.split(" ");
          defenses =
            typeInfo.length > 1
              ? weakness(typeInfo[0], typeInfo[1])
              : weakness(typeInfo[0]);
          const defDiv = document.querySelector(".results");
          var defenseValues = defenses; // Assuming defenses is an array
          var titles=["4x","2x","1x","1/2x","1/4x","0x"];
          for (var i = 0; i < defenseValues.length; i++) {
            var newDefenseString = `Takes ${titles[i]} From`;
            var newDefenseText = document.createTextNode(newDefenseString);

            defDiv.append(newDefenseText);

            var lineBreak = document.createElement("br");
            defDiv.appendChild(lineBreak);

            var defensesValue = defenseValues[i];
            var defensesText = document.createTextNode(defensesValue);
            defDiv.appendChild(defensesText);

            // Add an extra line break if there are more elements to display
            if (i < defenseValues.length - 1) {
              defDiv.appendChild(document.createElement("br"));
            }
          }
        } else {
          var NotFound = document.createTextNode(
            "Could Not Find this Pokemon Please Try Again"
          );
          defDiv.append(NotFound);
        }
      });
    })
    .catch((error) => console.error("Error loading JSON file:", error));
});
