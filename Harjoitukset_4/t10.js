/* 

Tehtävä 10. Tervehtijäbotti

Tee funktio, joka kertoo päivämäärän, kellonajan sekä tervehtii oikein 
    - aamulla klo 6-10 "Huomenta!"
    - päivällä klo 10-17 "Päivää!"
    - illalla klo 17-22 "Iltaa!
    - yöllä klo 22-6 "Hyvää yötä!"
    
Parametrina funktio saa taulukon, jossa on päivämäärä- ja kerronaikatietoja ISO-formaatissa. 
ISO-formaatti on merkkijono, jossa on vuosi-kuukausi-päivä_T_tunnit-minuutit-sekunnit:

    "2024-08-21T13-26-123Z"
    
Esimerkkitulostus:

    Päivää!
    Tänään on keskiviikko 21.8. ja kello on 13:26

Aja koodi terminaalissa:
node t10.js

*/

function greetings(timestamps){
    // lisää koodia tähän
}

// täydennä koodia:
let timestamps = ["2024-08-21T13-26-123Z","2024-08-20T09-10-123Z","2024-08-23T20-20-123Z", "2024-08-25T23-20-123Z"]
console.log(greetings())

// Älä koske tähän:
module.exports = greetings;