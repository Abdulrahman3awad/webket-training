import comket from "../comket/html.js";


let sortingBarData = [
    {title: "Recommended",class:""},
    {title: "Popullar",class:""},
    {title: "Top",class:""},
    {title: "All",class:"active"},
]
export let productsData = [
    {id:"c_1",favorite:false, cart:false, sorting: [ ], category: ["Computer"], name:"Lexma G88", price: "$100", img: "media/computer_1.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"],},
    {id:"c_2",favorite:false, cart:false, sorting: ["Popullar", "Recommended"], category: ["Computer"], name:"Lexma G88", price: "$100", img: "media/computer_2.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_3",favorite:false, cart:false, sorting: ["Recommended"], category: ["Computer"], name:"Lexma G88", price: "$100", img: "media/computer_3.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_4",favorite:false, cart:false, sorting: ["Top"], category: ["Computer"], name:"Lexma G88", price: "$100", img: "media/computer_4.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_5",favorite:false, cart:false, sorting: ["Popullar",], category: ["Game Headphones"], name:"Lexma G88", price: "$100", img: "media/headphone_1.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_6",favorite:false, cart:false, sorting: ["Top", "Popullar",], category: ["Game Headphones"], name:"Lexma G88", price: "$100", img: "media/headphone_2.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_7",favorite:false, cart:false, sorting: ["Top", "Popullar",], category: ["Game Headphones"], name:"Lexma G88", price: "$100", img: "media/headphone_3.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_8",favorite:false, cart:false, sorting: ["Top", "Popullar",], category: ["Game Headphones"], name:"Lexma G88", price: "$100", img: "media/headphone_4.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_9",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["VR Glasses"], name:"Lexma G88", price: "$100", img: "media/VR_1.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_10",favorite:false, cart:false, sorting: ["Top"], category: ["VR Glasses"], name:"Lexma G88", price: "$100", img: "media/VR_2.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_11",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["VR Glasses"], name:"Lexma G88", price: "$100", img: "media/VR_3.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_12",favorite:false, cart:false, sorting: ["Popullar" ], category: ["Keyboard"], name:"Lexma G88", price: "$100", img: "media/keyboard_1.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_13",favorite:false, cart:false, sorting: ["Popullar", "Recommended"], category: ["Keyboard"], name:"Lexma G88", price: "$100", img: "media/keyboard_2.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_14",favorite:false, cart:false, sorting: ["Popullar", "Recommended"], category: ["Keyboard"], name:"Lexma G88", price: "$100", img: "media/keyboard_3.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_15",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["Mouse Gaming"], name:"Lexma G88", price: "$100", img: "media/mouse_1.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_16",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["Mouse Gaming"], name:"Lexma G88", price: "$100", img: "media/mouse_2.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_17",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["Mouse Gaming"], name:"Lexma G88", price: "$100", img: "media/mouse_3.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
    {id:"c_18",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["Mouse Gaming"], name:"Lexma G88", price: "$100", img: "media/mouse_4.png",images: ["media/computer_2.png","media/headphone_3.png","media/mouse_1.png"]},
]
function madeSortingBar(object){
    let btn = comket.button({
        text:(object.title),
        class:(object.class)
    })
    btn.addEventListener("click",(e)=>{sortingBtnCheck(e)})
    btn.addEventListener("click", (e)=>{appearanceCategory(e)})
    return btn
}
function sortingBtnCheck(e) {
    let buttons = [...document.querySelectorAll(".sortingBtns button")]
    for (let element of buttons) {
        if (element.classList.contains("active") == true) {
            element.classList.remove("active")
        }
    }
    if (!e.target.classList.contains("active")) {
        e.target.classList.add("active")
    }
    
}
function appearanceCategory(e) {
        if (((e.target).textContent == "All")) {
            document.querySelector(".cards").innerHTML = "" 
            for (let object of productsData) {
                document.querySelector(".cards").append(madeCard(object))
            }
        }
        else {
            document.querySelector(".cards").innerHTML = "" 
            for (let object of productsData) {
                object.sorting.forEach((i)=>{if(i == (e.target).textContent) {
                    document.querySelector(".cards").append(madeCard(object))
                }})
            }
        }
    }
function header(){
    let headerBar = comket.div({
        class:"productsHeader",
        children:[
            comket.h2({text:"Product"}),
            comket.div({
                class:"sortingBtns",
                children:[
                ]
            })
        ]
    })
    for (let obj in sortingBarData) {
        if (obj == (sortingBarData.length - 1)) {
           ( madeSortingBar(sortingBarData[obj]).classList.value) = "active"
        }
        headerBar.children[1].prepend(madeSortingBar(sortingBarData[obj]))
    }
    return headerBar
}
export function madeCard(object){
    let card = comket.div({
        id: object.id,
        class:"card",
        category: object.category,
        sorting: object.sorting,
        children:[
            comket.div({children:[comket.img({src:object.img}),]}),
            comket.h3({text: object.name}),
            comket.p({text: object.category}),
            comket.span({text: object.price}),
            comket.button({children: [comket.Element("ion-icon",{name:"cart",}),comket.span({text:"Cart"})]}),
        ]
    })
    return card
}
function cards() {
    let cardsContainer = comket.div({
        class:"cards",
        children:[]
    })
    for (let obj of productsData) {
        cardsContainer.append(madeCard(obj))
    }
    return cardsContainer
}
function Products(){
    return comket.div({
        class:"products",
        children:[header(), cards(), ]
    })
}
document.body.append(Products())

