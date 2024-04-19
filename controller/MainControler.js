import Navigation from "../view/Navigation.js";
import FarmCard from "../view/FarmCard.js";
import InformationForm from "../view/InformationForm.js";
import { dataList } from "../data/datas.js";
import CreatedFarmCard from "../view/CreatedFarmCard.js";

class MainControler {
    constructor() {
        let dataList = JSON.parse(localStorage.getItem('newData')) || [];
        console.log(JSON.parse(localStorage.getItem('newData')) || [])
        this.farmParent = $("#farms")
        this.farmParent.show()
        this.formParent = $("#forms")
        this.formParent.hide();
        this.navigation = new Navigation()
        for (let index = 0; index < dataList.length; index++) {
            new CreatedFarmCard(dataList[index].farmnev, dataList[index].berletidij, dataList[index].berleskezd, this.farmParent)
        }
        this.nfc = new FarmCard(this.farmParent)
        //new CreatedFarmCard(this.farmnev, this.berletidij, this.berleskezd, this.farmParent)
        this.createButton = $("#create");
        this.dataRemover = $("#dataremover")
        this.#letrehoz(dataList);
        this.dataRemover.on("click", ()=>{
            console.log("clearing is ON")
            this.#osszesAdatotTorol(dataList);
        })

        

    }

    #letrehoz(list) {
        let active = false;
        $(this.createButton).on("click", () => {
            new InformationForm(this.formParent);
            if (!active) {
                active = true;
                this.farmParent.hide("fast")
                this.formParent.show("fast")
                const closeButton = $("#close")
                const saveButton = $("#save")
                this.createButton.attr("disabled", active)
                $(closeButton).on("click", () => {
                    active = false;
                    this.formParent.hide();
                    this.farmParent.show("fast")
                    this.createButton.attr("disabled", active)
                })
                $(saveButton).on("click", () => {
                    active = false;
                    this.formParent.hide();
                    this.farmParent.show("fast")
                    this.createButton.attr("disabled", active)
                    const farmnev = $("#fname").val()
                    const berlonev = $("#pname").val()
                    const elhelyezkedes = $("#location").val()
                    const berletidij = $("#lease").val()
                    const telefonszam = $("#tnumber").val()
                    const discord = $("#discord").val()
                    const berleskezd = $("#datetl").val()
                    list.push({farmnev, berlonev, elhelyezkedes, berletidij, telefonszam, discord, berleskezd })
                    console.log(list)
                    window.localStorage.setItem("newData", JSON.stringify(list))
                    new CreatedFarmCard(farmnev, berletidij, berleskezd, this.farmParent)
                    location.reload()
                })
            }
        })
    }
    
    #osszesAdatotTorol(){
        localStorage.clear()
        location.reload()
    }
}

export default MainControler