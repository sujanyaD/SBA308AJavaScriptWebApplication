
//importing Data from dataforFruits
import { getfruitInfoByGenus, getFruitsdata } from "./dataFruits.mjs";
let fruitData =[];
//funtion to populate fruit data
export async function populateFruitData() {
    // calling getFruitsData() to get list of fruits.
    const frtData = await getFruitsdata(); // call function getFruitsData() // caching array of objects in frtData
    fruitData=frtData;
console.log(frtData);
    // const fruitlist = ['Fruits'];
    const selectFruit = document.getElementById('Fruits'); // getting list value from HTMl by using getelementbyID selectFruit=<select></select>
    // write forloop to iterate through list  of items in dropdown.
    for (let i = 0; i < frtData.length; i++) {
        const fruitVal = document.createElement('option'); // creating element for list <option></option>
        fruitVal.innerHTML = frtData[i].name; // setting innerHTMl for my fruitlist
        selectFruit.appendChild(fruitVal); // selectFruit=<option>fruitname</option>
    }
}
// document.addEventListener("DOMContentLoaded", function () {
//     populateFruitData();
// });
document.getElementById("Fruits").addEventListener("change", function () {
    let selectedFruit=document.getElementById('Fruits').value;
    console.log(selectedFruit);
    console.log(fruitData);
   const filteredFruitData=fruitData.filter(fr=>fr.name==selectedFruit ); // filtering fruit from fruit data by filter method.
   let list = document.getElementById('selecedFuitInfo');
   for (let j = 0; j < filteredFruitData.length; j++) {
     
    // Create the list item:
    let item = document.createElement('li');
    // Set its contents:
    item.appendChild(document.createTextNode("Fruitfamily :" +filteredFruitData[j].family + "genus:" +filteredFruitData[j].genus));
    // item.appendChild(document.createTextNode("carbohydrates:" + filteredFruitData[j] + "protien:" + filteredFruitData[j] ));
    // Add it to the list:
    list.appendChild(item);
}
});

// document.getElementById("SrchBtn").addEventListener("click", function () {
//     let srchText = document.getElementById('frutsearch').value;
//     populateSearchResults(srchText);
// });
// function to search fruit genus
export async function populateSearchResults(srchText) {
    const frutGen = await getfruitInfoByGenus(srchText);
console.log(frutGen);
   let list = document.getElementById('nutritionInfo');
    for (let i = 0; i < frutGen.length; i++) {
        let nutrs = frutGen[i].nutritions;
        // Create the list item:
        let item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode("calories :" + nutrs.calories + "fat:" + nutrs.fat));
        item.appendChild(document.createTextNode("carbohydrates:" + nutrs.carbohydrates + "protien:" + nutrs.protien ));
        // Add it to the list:
        list.appendChild(item);
    }
}
