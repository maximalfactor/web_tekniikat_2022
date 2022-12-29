var textContent1 =`Me täällä Oulun Lautapelaajat ry:ssä tarjoamme Oululaisille nuorille mahdollisuuden pelata lautapelejä mukavassa seurassa. Järjestämme peli-iltoja jäsenille joka viikko. Toimintaamme liittyy myös kuukausittainen MTG-turnaus. Meidän tapahtumissa on aina hyvä ilmapiiri ja emme hyväksy syrjintää.  Liity jäsenekesemme, että pääset toimintaan mukaan! Peli iloistamme kielletyt pelit: Monopoli, Menolippu ja Twilight Imperium`

var textContent2 = `Jäsenyys on ilmaista! Kuitenkin perimme kaikilta jäseniltä kuukausittaisen käsittelymaksun (15e/kk). Jäsenillä on oikeus sekä velvollisuus osallistua viikottaisiin peli-iltoihin. Määräaikaan peli-iltaan saapumatta jääminen on rangaistavaa. Jäsenille tarjotaan myös alennus paikallisiin baareihin, joka auttaa lautapelaamisen aiheuttaman masennuksen kanssa. `;

var textBody = document.querySelector("#text-container .card-body");
textBody.innerHTML = textContent1;
page1Button = document.querySelector("#text-container .nav-item:first-child>.nav-link");
page2Button = document.querySelector("#text-container .nav-item:not(*:first-child)>.nav-link");

//Buttons to toggle between two text options
page1Button.addEventListener("click", () => {
    page1Button.classList.toggle("active");
    if(page1Button.classList.contains("active")) {
        page2Button.classList.toggle("active");
        textBody.innerHTML = textContent1;
        return
    }
})
page2Button.addEventListener("click", () => {
    page2Button.classList.toggle("active");
    if(page2Button.classList.contains("active")) {
        page1Button.classList.toggle("active");
        textBody.innerHTML = textContent2;
        return
    }
})

