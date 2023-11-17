import { createSearchCountryList } from "./funcCountry.js";
import { getSingleCountry } from "./funcCountry.js";


export const declareEvents = () => {

    let search_btn = document.querySelector("#search_btn");
    let input = document.querySelector("#id_input");
    let israel = document.querySelector("#id_Israel")
    let france = document.querySelector("#id_France")
    let USA = document.querySelector("#id_USA")
    let UK = document.querySelector("#id_UK")
    let thailand = document.querySelector("#id_Thailand")

    search_btn.addEventListener("click", () => {
        let id_input = document.querySelector("#id_input").value;
        createSearchCountryList(id_input)
    })

    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            let id_input = document.querySelector("#id_input").value;
            createSearchCountryList(id_input)
        }

    })


    israel.addEventListener("click", () => {
        getSingleCountry("israel");
    })
    france.addEventListener("click", () => {
        getSingleCountry("france");
    })
    USA.addEventListener("click", () => {
        getSingleCountry("United States");
    })
    UK.addEventListener("click", () => {
        getSingleCountry("United Kingdom");
    })
    thailand.addEventListener("click", () => {
        getSingleCountry("thailand");
    })




}