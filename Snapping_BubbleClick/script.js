import comket from "../comket/html.js"

function page_1() {
    let section = comket.div({
        class: "page_1",
        children:[
            comket.h1({text:"webket"}),
            comket.p({text: "welcom in our website"}),
            comket.a({text: "Learn more", href:"#content"}),
        ]
    })

    return section
}
function page_2() {
    let section = comket.div({
        class:"page_2",
        text: "The Rest Of The Content",
        id:"content",
    })
    section.addEventListener("click",(e)=>{
        let bubble = document.createElement("div");
        bubble.style.left = e.x + "px"
        bubble.style.top = e.y + "px"
        section.append(bubble)
        setTimeout(()=>{bubble.remove()}, 500)
    })
    return section
}
document.body.append(page_1(),page_2())