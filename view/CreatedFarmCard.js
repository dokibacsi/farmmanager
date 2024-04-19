class CreatedFarmCard{
    #parentE
    #farmName
    #lease
    #date
    constructor(farmName, lease, date, parentE){
        this.#farmName = farmName;
        this.#lease = lease;
        this.#date = date; 
        this.#parentE = parentE
        this.#ujOsszeallit(this.#farmName, this.#lease, this.#date, this.#parentE)
    }

    #ujOsszeallit(farmName, lease, date, parent){
        let txt = ""
        txt += `<div id=card>`
        txt += `<h1 id=name>${farmName}</h1>`
        txt += `<img src="../images/icons/farm-house.png">`
        txt += `<h3>${lease} | ${date}</h3>`
        txt += `<button id="open">Megjelenítés</button>`
        txt += `</div>`
        parent.append(txt)
    }
}


export default CreatedFarmCard;