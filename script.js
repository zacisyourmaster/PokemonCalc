document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".poke-search form");
  var resultsParagraph = document.querySelector(".results");
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
        if (typeChart[key][type1] == 1.0)
          neutral.push(key);
        else if (typeChart[key][type1] == 2.0) 
          twox.push(key);
        else if (typeChart[key][type1] == 0.5) 
          halfx.push(key);
        else if (typeChart[key][type1] == 0.0) 
          zerox.push(key);
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
    // if (type2 != undefined) {
    //   console.log(fourx);
    //   console.log(twox);
    //   console.log(neutral);
    //   console.log(halfx);
    //   console.log(qtrx);
    //   console.log(zerox);
    // } else {
    //   twox.length > 0 ? console.log(twox) : "";
    //   neutral.length > 0 ? console.log(neutral) : "";
    //   halfx.length > 0 ? console.log(halfx) : "";
    //   zerox.length > 0 ? console.log(zerox) : "";
    // }
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
        function weakness(type) {}
        // Update the results paragraph based on the found data
        if (pokemonData) {
          // Access the specific properties in your JSON structure
          var typeInfo = `Type: ${pokemonData.pdtype}`;
          resultsParagraph.textContent = `
          Takes 2x From<br/>
          ${weakness(typeInfo)}`;
        } else {
          resultsParagraph.textContent = `Pokemon not found.`;
        }
      });
    })
    .catch((error) => console.error("Error loading JSON file:", error));
});
