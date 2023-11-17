import CountryClass from "./classCountry.js";

let all_states=[];

export const getAllCountries=(arr)=>{
    all_states=arr;
}

// יציג את הטעינה ויסתיר את הרשימה
export const showLoading = () => {
    document.querySelector("#id_loading").style.display = "block";
    document.querySelector("#id_row").style.display = "none";
}
// יסתיר את הטעינה ויציג את הרשימה אחרי שהבקשה התקבלה
export const hideLoading = () => {
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("#id_row").style.display = "flex";
}

export const createPrimaryCountryList = () => {
    hideLoading();
    const countries_arr = ['israel', 'france', 'united kingdom', 'thailand', 'united states']

    let primaryCountries = all_states.filter((item) =>
        countries_arr.includes(item.name.common.toLowerCase())
    );

    primaryCountries.forEach(item => {
        console.log(item);

        let country = new CountryClass("#id_row", item);
        country.render();

    });
};


export const createSearchCountryList = (val) => {
    let searchedCountries = all_states.filter((item) =>
        item.name.common.toLowerCase().includes(val.toLowerCase())
    );
    if (searchedCountries.length > 0) {
        document.querySelector("#id_row").innerHTML = "";
        searchedCountries.forEach(item => {
            let country = new CountryClass("#id_row", item);
            country.render();            
        });
    }
    else {
        alert("There is no country name that contains the values you entered. Please try again")
        document.querySelector("#id_input").value = "";
        return;
    }
}





export const getSingleCountry = (val) => {

    let country_values = all_states.find(element => val.toLowerCase() === element.name.common.toLowerCase());

    if (country_values) {
        document.querySelector("#id_row").innerHTML = ""
        let country = new CountryClass("#id_row", country_values);
        country.renderSingle();
    } else {
        alert("There is a problem with the country name.")
    }


}

export const getCountryName = (val) => {
    let fullname = all_states.find(element => val === element.cca3).name.common;
    return fullname
}
