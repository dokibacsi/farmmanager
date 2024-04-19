class InformationForm{
    #parentE
    constructor(parentE){
        this.#parentE = parentE
        this.#FormMegjelenit(this.#parentE)
    }

    #FormMegjelenit(parent){
        let txt = `<div id="inForm">`;
        txt += `<label>ID:</label>`
        txt += `<input type="number" name="id" id="id">`
        txt += `<label>Farm neve:</label>`
        txt += `<input type="text" name="fname" id="fname">`
        txt += `<label>Bérbeadó neve:</label>`
        txt += `<input type="text" name="pname" id="pname">`
        txt += `<label>Elhelyezkedés:</label>`
        txt += `<input type="text" name="location" id="location">`
        txt += `<label>Összeg:</label>`
        txt += `<input type="number" name="lease" id="lease">`
        txt += `<label>Telefonszám:</label>`
        txt += `<input type="tel" name="tnumber" id="tnumber">`
        txt += `<label>Discord:</label>`
        txt += `<input type="text" name="discord" id="discord">`
        txt += `<label>Bérlés kezdete:</label>`
        txt += `<input type="datetime-local" name="datetl" id="datetl">`
        txt += `<button id="save">Mentés</button>`
        txt += `<button id="close">Bezárás</button>`
        txt += `</div>`
        parent.html(txt)
    }
}

export default InformationForm