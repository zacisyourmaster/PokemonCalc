var typeSelect = document.querySelectorAll("[ptype]");
var defenses = document.querySelector(".defense");


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
let t1=null;
let t2=null;
function updateVariables(variable, input) {
  const buttonType = input.getAttribute('ptype');

  if (variable === 't1') {
    t1 = buttonType;
  } else if (variable === 't2'&& t2 === null) {
    t2 = buttonType;
  }

  // Check if both variables are set, if yes, perform any necessary actions
  if (t1 !== null || t2 !== null) {
    // Both buttons are selected, you can do something here
    console.log('Type 1:', t1);
    console.log('Type 2:', t2);
    console.log(weakness(t1,t2))
    updateResults(t1,t2);
  }
}
function updateResults(t1,t2) {
  // Display the results
  const result = weakness(t1, t2);
  const defense = document.querySelector('.defense');

  // Clear previous results
  defense.innerHTML = '';

  for (const key in result) {
    const heading = document.createElement('h3');
    heading.className='fs-5 mt-4';
    if(key=="fourx")
      heading.textContent = "Takes 4x Damage From";
    if(key=="twox")
      heading.textContent = "Takes 2x Damage From";
    if(key=="neutral")
      heading.textContent = "Takes 1x Damage From";
    if(key=="halfx")
      heading.textContent = "Takes 1/2x Damage From";
    if(key=="qtrx")
      heading.textContent = "Takes 1/4x Damage From";
    if(key=="zerox")
      heading.textContent = "Takes 0x Damage From";
    const types = document.createElement('p');
    const ar=result[key];
    for(const element of ar){
      const span=document.createElement('span');
      span.className="results";
      span.style.background=[typeColors[element]];
      span.style.margin='.25rem';
      span.style.textShadow="0 1px 0 black, 0 0 1px rgba(0,0,0,.6), 0 0 2px rgba(0,0,0,.7), 0 0 3px rgba(0,0,0,.8), 0 0 4px rgba(0,0,0,.9)";
      span.textContent=element;
      types.appendChild(span);
    }
    //span.textContent = result[key].join(', ');
   
    // Append the heading and types to the defense container
    defense.appendChild(heading);
    defense.appendChild(types);

  }
}
function weakness(type1, type2=null) {
  var neutral = [];
  var fourx = [];
  var twox = [];
  var halfx = [];
  var qtrx = [];
  var zerox = [];
  for (const key in typeChart) {
    if (type2 === null) {
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

  // Add properties to defenses only if the corresponding array is not empty
  if (fourx.length > 0) defenses.fourx = fourx;
  if (twox.length > 0) defenses.twox = twox;
  if (neutral.length > 0) defenses.neutral = neutral;
  if (halfx.length > 0) defenses.halfx = halfx;
  if (qtrx.length > 0) defenses.qtrx = qtrx;
  if (zerox.length > 0) defenses.zerox = zerox;

  return defenses;

}
const typeColors = {
  Normal: '#A8A878',
  Fire: '#F08030',
  Water: '#6890F0',
  Electric: '#F8D030',
  Grass: '#78C850',
  Ice: '#98D8D8',
  Fighting: '#C03028',
  Poison: '#A040A0',
  Ground: '#E0C068',
  Flying: '#A890F0',
  Psychic: '#F85888',
  Bug: '#A8B820',
  Rock: '#B8A038',
  Ghost: '#705898',
  Dark: '#705848',
  Steel: '#B8B8D0',
  Fairy: '#EE99AC',
  Dragon: '#7038F8',
};
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".poke-search form");
  // Load the JSON file
 
  fetch("pokedex2.json")
    .then((response) => response.json())
    .then((data) => {
      // Add a submit event listener to the form
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Get the value entered by the user
        var pokemonName = document.getElementById("pname").value;
        console.log(pokemonName);
        // Find the Pokemon data in the loaded JSON file
        var pokemonData = data.find(
          (pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase()
        );
      
        if (pokemonData) {
          var typeInfo
          typeInfo=pokemonData.pdtype
          console.log(typeInfo);
          updateResults(typeInfo[0],typeInfo[1]);
        }else{
          const notFound = document.querySelector(".nf");
          notFound.setAttribute('style','display: contents;')
        }
      });
    })
    .catch((error) => console.error("Error loading JSON file:", error));
});
