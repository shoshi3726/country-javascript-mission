import { getCountryName, createPrimaryCountryList, getSingleCountry } from "./funcCountry.js";


export default class CountryClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.population = _item.population;
        this.cca3 = _item.cca3;
        this.region = _item.region;
        this.language = Object.values(_item.languages);
        this.coin = Object.values(_item.currencies);
        // console.log(this.coin);
        this.capital = _item.capital ? _item.capital[0] : null;
        this.flag = _item.flags;
        this.borders = _item.borders ? _item.borders.map(getCountryName) : null;
        // console.log(this.borders);
        this.lat = _item.latlng[0];
        this.lng = _item.latlng[1];
        // console.log(this.lat);
        // console.log(this.lng);
    }


    render() {
        let div = document.createElement("div");
        div.className = "col-md-5 col-lg-3 p-2 m-3 bg-dark div_in_row";
        div.dataset.aos = "zoom-in";
        div.dataset.aosDuration = "2000";
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <div style="min-height: 220px; background-image: url(${this.flag.png}); background-size: 100% 100%; background-repeat: no-repeat;"></div>
        <h2 class="text-center text-white my-2">${this.name}</h2>
        `
        
        div.addEventListener("click", () => {
            document.querySelector(this.parent).innerHTML = "";
            this.renderSingle();
        })
    }


    renderSingle() {
        
        document.querySelector("#id_input").value = "";
        
        let divSingle = document.createElement("div");
        divSingle.className = "col-md-9 col-lg-6 p-2 bg-white text-center d-flex shadow-lg div_single";

        divSingle.dataset.aos = "flip-left";
        divSingle.dataset.aosDuration = "2000";

        document.querySelector(this.parent).append(divSingle);

        let bordersLinks = this.borders.map(border => {
            return `<a href="#" class="border_link">${border}</a>`;
        }).join(" , ");

        divSingle.innerHTML = `
      <div class="p-2 pt-5" style="width:60%;">
      <img src="${this.flag.png}" alt="${this.flag.alt}"  class="w-50">
      <h2 class="mt-2">${this.name}</h2>
            <p>
        <strong>population:</strong> ${this.population.toLocaleString()}<br>
        <strong>region:</strong> ${this.region}<br>
        <strong>languages:</strong> ${this.language}<br>
        <strong>coin:</strong> ${this.coin[0].name}<br>
        <strong>capital:</strong> ${this.capital}<br>
        <strong>borders:</strong> ${bordersLinks}
        </p>
      <button id="res_btn" class="btn btn-dark">Return</button>
      

      </div>
        <div class="Mymap">
                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?q=${this.lat},${this.lng}&hl=iw&z=5&amp;output=embed">
            </iframe>
     </div>
      `
        let res_btn = document.querySelector("#res_btn");
        res_btn.addEventListener("click", () => {
            document.querySelector("#id_row").innerHTML = ""
            createPrimaryCountryList();
        })


        divSingle.querySelectorAll('.border_link').forEach(link => {
            link.addEventListener('click', () => {
                getSingleCountry(link.textContent);
            });
        });


    }

}
