function app() {

    var giver = [
        {
        label: "Rosa",
        value: "rosa-1"
        },
        {
        label: "Fredrik",
        value: "Fredrik-2"
        },
        {
        label: "Option 3",
        value: "option-3"
        }
    ];

    var selectTag = document.createElement("select");

    for (let optObj of giver) {
        let optEle = document.createElement("option");
        optEle.text = optObj.label;
        optEle.value = optObj.value;
        selectTag.add(optEle);
    }

    var div = document.getElementById("div-id");
    div.appendChild(selectTag);
};