import { declareEvents } from "./declareEvents.js";
import { showLoading , createPrimaryCountryList, getAllCountries } from "./funcCountry.js";


const init = () => {
    doApi();
    declareEvents();

}


const doApi = async () => {
    showLoading();

    let url = "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,cca3,region,languages,capital,flags,borders,latlng";

    let resp = await fetch(url);
    console.log(resp);
    let data = await resp.json();
    console.log(data);
    
    getAllCountries(data);
    createPrimaryCountryList();


}


init();