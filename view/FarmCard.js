class FarmCard{
    #parentE
    constructor(parentE){
        this.#parentE = parentE
        this.#ujOsszeallit(this.#parentE)
    }

    #ujOsszeallit(parent){
        let txt = ""
        txt += `<div id=card>`
        txt += `<h1 id=name>Üres farm</h1>`
        txt += `<img src="../images/icons/farm-house.png">`
        txt += `<h3>A kezdetekhez hozd létre!</h3>`
        txt += `<button id=create>Létrehozás</button>`
        txt += `</div>`
        parent.append(txt)
    }
}


export default FarmCard;