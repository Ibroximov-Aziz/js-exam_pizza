/*This is Form elements*/

let elSiteForm = document.querySelector(".site-form");
let elBreadInput = document.querySelector(".bread-input");
let elJsSelect = document.querySelector(".js-select");
let elJsRadio = document.querySelector(".js-radio");
let elJsCheckbox = document.querySelector(".js-checkbox");
let elAdditionalCheckbox = document.querySelector(".additional-checkbox");

/*============Elements==========*/
let elBreadText = document.querySelector(".breadText")
let elbreadsizeText = document.querySelector('.breadsizeText')
let elputontopArrlist = document.querySelector('.Abovelist')
let addlist = document.querySelector('.addlist')

/*============output==========*/

let elOutput = document.querySelector(".ready");
let elFormBtn = document.querySelector(".form-btn");

/*============Arrs==========*/
var breadProductArr = ["thin", "middle", "thick"]
var breadsizeArr = ['25', '30', '35']
var putontopArr = ["Tomatoes", "Meat", "Olive", "Cucumber", "Peg", "Qazi"]
var PraductsArr2 = []
var addArr2 = []
var  addArr = ["sausage","bitter"]

for (const i of breadProductArr) {

    let elOption = document.createElement('option')

    elOption.textContent = i

    elJsSelect.appendChild(elOption)

}
for (const i of breadsizeArr) {

    let elRadio = document.createElement("input")
    var ellabel = document.createElement("label")

    elRadio.type = "radio"
    elRadio.value = i
    elRadio.name = "size"
    elRadio.id = i

    ellabel.innerHTML = `${i} cm`; 
    ellabel.htmlFor = i

    elJsRadio.appendChild(ellabel)
    elJsRadio.appendChild(elRadio)

}

for (const i of putontopArr) {

    let elCheckbox = document.createElement("input")
    var ellabelcheck = document.createElement("label")

    elCheckbox.type ="checkbox"
    elCheckbox.textContent = i
    elCheckbox.value = i
    elCheckbox.name = i
    elCheckbox.id= i

    ellabelcheck.htmlFor = i
    ellabelcheck.innerHTML = i

    elJsCheckbox.appendChild(ellabelcheck)
    elJsCheckbox.appendChild(elCheckbox)

}
for (const i of addArr) {
    let elCheckbox1 = document.createElement("input")
    var ellabelcheck1 = document.createElement("label")

    elCheckbox1.type ="checkbox"
    elCheckbox1.textContent = i
    elCheckbox1.value = i
    elCheckbox1.name = i
    elCheckbox1.id= i

    ellabelcheck1.htmlFor = i
    ellabelcheck1.innerHTML = i

    elAdditionalCheckbox.appendChild(ellabelcheck1)
    elAdditionalCheckbox.appendChild(elCheckbox1)
}

elSiteForm.addEventListener("change", function (e) {
    e.preventDefault()
    elBreadText.textContent = elJsSelect.value
    if (breadsizeArr.includes(e.target.value)) {
        elbreadsizeText.innerHTML = `${e.target.value} cm`
    }

    if (putontopArr.includes(e.target.value)) {
        var praduc =e.target.name
        if(!PraductsArr2.includes(praduc)){
            PraductsArr2.push(praduc)
            var elProductLi = document.createElement('li')
            elProductLi.innerHTML = praduc
            elputontopArrlist.appendChild(elProductLi)
            
        }
    }
    if (addArr.includes(e.target.value)) {
        if(!addArr2.includes(e.target.name)){
            addArr2.push(e.target.name)
            var eladdLi = document.createElement('li')
            eladdLi.innerHTML = e.target.name
            addlist.appendChild(eladdLi)
        }
    }
})