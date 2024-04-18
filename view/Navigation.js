class Navigation{
    constructor(){
        const parentE = $("nav")
        const list = ["farm", "market", "inventory"];
        this.#osszeallit(list, parentE);
    }

    #osszeallit(list, parent){
        let txt = "<ul>"
        list.forEach(element => {
            txt += `<li id="${element}">${element}</li>`
        });
        txt += "</ul>"

        parent.append(txt);
    }
}

export default Navigation