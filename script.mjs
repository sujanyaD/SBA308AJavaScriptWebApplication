
//importing Data from dataforFruits
import { getFruitsdata } from "./dataFruits.mjs";
// import {popula}

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
    // const img = document.createElement('fruitimg');
    // console.log(getFruitsdata());
}

document.addEventListener("DOMContentLoaded", function () {
    populateFruitData();

});