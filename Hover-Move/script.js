import comket from "../comket/html.js"



function hover() {
    let tow = comket.div({
        class:"tow",
    })
    let one = comket.div({
        class:"one",
        text:"HOVER",
    })
    document.body.append(one,tow)
    document.addEventListener("mouseout",()=>{
        tow.style.height = "51.5vh"
    })
    document.addEventListener("mousemove",(e)=>{
        tow.style.height = e.y +"px"
    })
}
hover()
// document.body.addEventListener