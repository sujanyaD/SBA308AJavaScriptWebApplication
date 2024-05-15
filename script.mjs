import getFruitsData from "./dataForFruits.mjs"; // importing Data from dataforFruits
//
function populateFruitData() { 
    // calling getFruitsData() to get list of fruits.
    // write foreach to iterate through each item in list


    const frtData = getFruitsData(); // call function getFruitsData() // caching array of objects in frtData
    // const fruitlist = ['Fruits'];
    const selectFruit = document.getElementById('Fruits'); // getting list value from HTMl by using getelementbyID selectFruit=<select></select>
    for (const i = 0; i < frtData.length; i++) {
        const fruitVal = document.createElement('option'); // creating element for list <option></option>
        fruitVal.innerHTML = frtData[i].name; // setting innerHTMl for my fruitlist
        selectFruit.appendChild('fruitVal'); // selectFruit=<option>fruitname</option>
    }

}