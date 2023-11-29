from bs4 import BeautifulSoup
import requests
import sys
import json
sys.stdout.reconfigure(encoding='utf-8')

url="https://pokemondb.net/pokedex/all"
result=requests.get(url).text
doc=BeautifulSoup(result,"html.parser")
table=doc.find("table")
thead=table.find("thead")
th=thead.find_all("th")

# keys=[]#number, name,type,stat total,hp,attack,defense,sp. attack, sp def,speed
# for header in th:
#     keys.append(header.string)
# pokemon={keys[i]:keys for i in range(len(keys))}
# pokedex=[pokemon]
tbody= table.find("tbody")
trs=tbody.find_all("tr")
#print(trs[0].prettify())
pokedex={}

for tr in trs:# for each row in the table i extract the name, type and pokemon numbers.
    num=tr.find("span",class_="infocard-cell-data").string
    name=tr.find("a",class_="ent-name").string
    type_list=tr.find_all("a",class_='type-icon')
    types=[type.string for type in tr.find_all("a", class_="type-icon")]
    pokedex[name]={"Number":num, "Types":types}
    
pokedexList=[{"Name": name, **data} for name, data in pokedex.items()]#converting it to a list form so it can be used in my javascript file

with open ('completePokedex.json', 'w') as json_file:
    json.dump(pokedexList, json_file, indent=2)