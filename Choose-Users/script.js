
import comket from "../comket/html.js"
let usersData = [
    { img: "media/me.jpg", name: "Abdulrahman Awad", job: "Front-End Developer", check: false },
    { img: "media/me.jpg", name: "Abdulrahman Awad", job: "Front-End Developer", check: false },
    { img: "media/me.jpg", name: "Abdulrahman Awad", job: "Front-End Developer", check: true },
    { img: "media/me.jpg", name: "Abdulrahman Awad", job: "Front-End Developer", check: false },
    { img: "media/me.jpg", name: "Abdulrahman Awad", job: "Front-End Developer", check: true },
    { img: "media/me.jpg", name: "Abdulrahman Awad", job: "Front-End Developer", check: false },
]
function leftHeader() {
    return comket.div({
        children: [
            comket.h1({ text: "Select user" }),
            comket.p({ text: "Add user to the dashboard so they can manage the content" })
        ]
    })
}
function rightHeader() {
    let button = comket.button({ text: "Select all" })
    button.addEventListener("click", (e) => { clickAselect(e) })
    button.addEventListener("click", (e) => {
        if (e.target.textContent == "Select all") {
            e.target.textContent = "Deselect all"
        }
        else e.target.textContent = "Select all"
    })
    return button
}
function header() {
    return comket.div({ class: "header", children: [leftHeader(), rightHeader()] })
}

function madeAcard(obj) {
    let card = comket.div({
        class: "card",
        children: [
            comket.img({ src: obj.img }),
            comket.div({
                children: [
                    comket.h2({ text: obj.name }),
                    comket.p({ text: obj.job }),
                ]
            }),
            comket.Element("ion-icon", { name: "checkmark-circle" })
        ]
    })
    card.addEventListener("click", (e) => { clickAcard(e) })
    return card
}
let count = 0;
function always() {
    count = 0
    let cards = [...document.querySelectorAll(".card")]
    let span = document.querySelector(".footer p span")
    let btn = document.querySelector(".header > button")
    cards.forEach((e)=>{
        if (e.classList.contains("checked")) {
            count += 1
            span.textContent = count
        }
    })
    if (count == cards.length) {
        btn.textContent = "Deselect all"
    }
    else {btn.textContent = "Select all"}
}
function clickAcard(e) {
    e.target.classList.toggle("checked");
    always()
    console.log(count);
}

function clickAselect(e) {
    let cards = document.querySelectorAll(".card")
    let span = document.querySelector(".footer p span")
    count = 0
    for (let card of [...cards]) {
        if (e.target.textContent == "Select all") {
            if (card.classList.contains("checked"))continue
            else {
                card.classList.add("checked")
                count = [...cards].length
                
                span.textContent = count
            }
        }
        else {
            if (!card.classList.contains("checked")) continue
            else {
                card.classList.remove("checked")
                span.textContent = 0
                count = 0
            }

        }
    }
}
function Cards(data) {
    let cards = comket.div({
        class: "cards",
    })
    for (let obj of data) {
        cards.append(madeAcard(obj))
    }
    return cards
}
function footer() {
    let fot = comket.div({
        class: "footer",
        children: [
            comket.p({ children: ["You will add ", comket.span({ text: count }), " users"] }),
            comket.button({ text: 'Next Step' })
        ]
    })
    return fot
}
function Choose_Users() {
    let container = comket.div({
        class: "container",
        children: [header(), Cards(usersData), footer()]
    })
    return container
}

document.body.append(Choose_Users())