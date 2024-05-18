import { populateFruitData, populateSearchResults } from "./script.mjs"

document.addEventListener("DOMContentLoaded", function () {
    populateFruitData();
});
document.getElementById("SrchBtn").addEventListener("click", function () {
    let srchText = document.getElementById('frutsearch').value;
    populateSearchResults(srchText);
});