module.exports = [{
    title: "Contact",

    items: [{
        type: "header",
        class: "margin-top-md",
        content: {
            value: "Contact"
        }
    }, {
        type: "subtitle",
        content: {
            value: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        }
    }, {
        type: "form",
        class: "margin-top-md",
        content: {
            title: "LET’S TALK",
            subtitle: "eque porro quisquam est qui dolorem ipsum quia dolor sit amet",

            submitUrl: "",
            items: [{
                type: "input",
                content: {
                    label: "Name"
                }
            }, {
                type: "input",
                content: {
                    label: "Email"
                }
            }, {
                type: "textarea",
                content: {
                    label: "Message",
                    rows: 5
                }
            }, {
                type: "submit",
                content: {
                    label: "Submit"
                }
            }]
        }
    }]
}];