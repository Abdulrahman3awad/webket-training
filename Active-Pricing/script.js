import comket from "../comket/html.js"



function Container() {
    let container = comket.div({
        class: "container",
        children: [
            comket.div({
                class: "main-card card-1",
                children: [
                    comket.h1({ text: "Basic" }),
                    comket.h2({ text: "$5" }),
                    comket.p({ text: "per month" }),
                    comket.div({
                        class: "spans",
                        children: [
                            comket.span({ class: "l1" }),
                            comket.span({ class: "l2" }),
                            comket.span({ class: "l3" }),
                            comket.span({ class: "l4" }),
                        ]

                    })
                ]

            }),
            comket.div({
                class: "main-card card-2",
                children: [
                    comket.h1({ text: "Pro" }),
                    comket.h2({ text: "$10" }),
                    comket.p({ text: "per month" }),
                    comket.div({
                        class: "spans",
                        children: [
                            comket.span({ class: "l1" }),
                            comket.span({ class: "l2" }),
                            comket.span({ class: "l3" }),
                            comket.span({ class: "l4" }),
                        ]

                    })

                ]

            }),
            comket.div({
                class: "main-card card-3",
                children: [
                    comket.h1({ text: "Premium" }),
                    comket.h2({ text: "$20" }),
                    comket.p({ text: "per month" }),
                    comket.div({
                        class: "spans",
                        children: [
                            comket.span({ class: "l1" }),
                            comket.span({ class: "l2" }),
                            comket.span({ class: "l3" }),
                            comket.span({ class: "l4" }),
                        ]

                    })
                ]

            }),
            comket.div({
                class: "bottom",
                children: [
                    comket.div({
                        class: "bot-card bottom-1",
                        children: [
                            comket.div({
                                class: "prog-top",
                                children: [
                                    comket.p({ text: "5 Users" }),
                                    comket.span({ text: "100 Users" })
                                ]
                            }),
                            comket.div({
                                class: "cont-prog",
                                children: [
                                    comket.div({
                                        class: "prog p1"
                                    })
                                ]

                            })

                        ]
                    }),
                    comket.div({
                        class: "bot-card bottom-2",
                        children: [
                            comket.div({
                                class: "prog-top",
                                children: [
                                    comket.p({ text: "20 GB" }),
                                    comket.span({ text: "200 GB" })
                                ]
                            }),
                            comket.div({
                                class: "cont-prog",
                                children: [
                                    comket.div({
                                        class: "prog p2"
                                    })
                                ]

                            })
                        ]
                    }),
                    comket.div({
                        class: "bot-card bottom-3",
                        children: [
                            comket.div({
                                class: "prog-top",
                                children: [
                                    comket.p({ text: "1 Project" }),
                                    comket.span({ text: "50 Projects" })
                                ]
                            }),
                            comket.div({
                                class: "cont-prog",
                                children: [
                                    comket.div({
                                        class: "prog p3"
                                    })
                                ]

                            })


                        ]
                    })
                ]
            })
        ]
    })

    return container
}

document.body.append(Container())