export async function getFruitsdata() {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all');
    const data = await response.json();
    return data;
    // let res = await axios.get("https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all");
    // return res;
        // .then(response => {
        //     return response.data;
        // })
        // .catch(error => {
        //     console.error("There was a problem fetching the fruits:", error);
        // });

}
// funtion for getting Genus info for fruits 
export async function getfruitInfoByGenus(genus){
    // getting API for Genus response
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/genus/'+ genus);
    const data = await response.json();
    return data;
}