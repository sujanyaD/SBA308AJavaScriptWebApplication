
//importing Data from dataforFruits
import { getfruitInfoByGenus, getFruitsdata } from "./dataFruits.mjs";

//funtion to populate fruit data
export async function populateFruitData() {
    // calling getFruitsData() to get list of fruits.
    const frtData = await getFruitsdata(); // call function getFruitsData() // caching array of objects in frtData

    const fruitlist = ['Fruits'];
    const selectFruit = document.getElementById('Fruits'); // getting list value from HTMl by using getelementbyID selectFruit=<select></select>
    // write forloop to iterate through list  of items in dropdown.
    for (let i = 0; i < frtData.length; i++) {
        const fruitVal = document.createElement('option'); // creating element for list <option></option>
        fruitVal.innerHTML = frtData[i].name; // setting innerHTMl for my fruitlist
        selectFruit.appendChild(fruitVal); // selectFruit=<option>fruitname</option>
    }

}

document.addEventListener("DOMContentLoaded", function () {
    populateFruitData();

});


document.getElementById("SrchBtn").addEventListener("click", function () {
    let srchText = document.getElementById('frutsearch').value;
    populateSearchResults(srchText);

});

// function to search fruit genus
export async function populateSearchResults(srchText) {
    const frutGen = await getfruitInfoByGenus(srchText);

    var list = document.getElementById('nutritionInfo');
    for (var i = 0; i < frutGen.length; i++) {
        let nutrs = frutGen[i].nutritions;
        // Create the list item:
        var item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode("calories :" + nutrs.calories + "fat:" + nutrs.fat));
        // Add it to the list:
        list.appendChild(item);
    }

}
