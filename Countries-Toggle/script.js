import comket from "../comket/html.js"
let CounriesData = [
    {title:"Egypt", img: "media/Egypt.png", id:"c_1" },
    {title:"Algeria", img: "media/Algeria.png", id:"c_2" },
    {title:"Canada", img: "media/Canada.png", id:"c_3" },
    {title:"China", img: "media/China.png", id:"c_4" },
    {title:"Brazil", img: "media/Brazil.png", id:"c_5" },
    {title:"Japan", img: "media/Japan.png", id:"c_6" }
]
let selectedData ={title:"Choose a country", img: "media/countries.png", }
let elementSelected;
function madeSelected(obj) {
    let btn = comket.div({
        class:"countrySelected",
        children:[
            comket.img({src: obj.img}),
            comket.span({text:obj.title}),
            comket.img({src:"media/arrow.png", class:"arrow"})
        ]
    })
    btn.addEventListener("click",()=>{
        openCountries()
    })
    return btn
}
function madeCountry(obj) {
    let btn = comket.div({
        class:"country",
        id: obj.id,
        children:[
            comket.img({src: obj.img}),
            comket.span({text:obj.title})
        ]
    })
    btn.addEventListener("click",(e)=>{
        clickConuntry(e)
    })
    return btn
}
function openCountries() {
    let container = document.querySelector(".countries")
    let arrow = [...document.querySelectorAll(".arrow")]
    if ([...container.children].length <= 1) {
        for (let obj of CounriesData) {
             container.append(madeCountry(obj))
        }
        arrow.forEach((e)=>{e.classList.add("open")})
        for (let elem of [...container.children]) {
            if (elem.id == elementSelected) {
                elem.classList.add("choose")
            }
        }
    }
    else{
        container.innerHTML = ""
        arrow.forEach((e)=>{e.classList.remove("open")})
    }
    container.style.height = [...container.children].length * 70 + "px"
    container.style.top = "90px"
    container.style.zIndex = "0"
}
function clickConuntry(e) {
    let container = document.querySelector(".countries")
    let arrow = [...document.querySelectorAll(".arrow")]
    if ([...container.children].length > 1) {
        container.innerHTML = ""
        elementSelected = e.target.id
        e.target.append(
            comket.img({src:"media/arrow.png", class:"arrow"})
        )
        container.append(e.target)
        container.style.top = "10px"
        arrow.forEach((e)=>{e.classList.remove("open")})
        for (let elem of [...container.children]) {
            if (elem.id == elementSelected) {
                elem.classList.remove("choose")
            }
        }
    }
    else{
        container.innerHTML = ""
        openCountries()
    }
    container.style.height = [...container.children].length * 70 + "px"
}

function CountriesContainer() {
    let container = comket.div({
        class:"countries",
    })
    return container
}

function Counries_Toggle() {
    let container = comket.div({
        class:"container",
        children:[
           madeSelected(selectedData), CountriesContainer()
        ]
    })
    return container
}
document.body.append(Counries_Toggle())