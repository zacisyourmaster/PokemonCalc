from bs4 import BeautifulSoup
import requests
import sys
import re
import json
sys.stdout.reconfigure(encoding='utf-8')

url="https://pokemondb.net/pokedex/game/scarlet-violet"
result=requests.get(url).text
doc=BeautifulSoup(result,"html.parser")

infocard_list = doc.find("div", class_="infocard-list infocard-list-pkmn-lg")
infocards = infocard_list.find_all("div", class_="infocard")

pokedex = {
}

for infocard in infocards:
    name = infocard.find("a", class_="ent-name").string
    pokemon_type = infocard.find("a", class_="itype").string
    pokedex_number = infocard.find("small").string# if infocard.find("small") else None
    pokedex[name]={'pdnum':pokedex_number[2:],'pdtype':pokemon_type}

pokemon_list = [{"name": name, **data} for name, data in pokedex.items()]
with open ('pokedex1.json', 'w') as json_file:
        json.dump(pokemon_list, json_file, indent=2)
