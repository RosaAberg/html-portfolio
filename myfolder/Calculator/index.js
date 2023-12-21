var numberOfNumberButtons = document.querySelectorAll(".number").length;



for (var i = 0; i<numberOfNumberButtons; i++) {
    document.querySelectorAll(".number")[i].addEventListener("click", function(){

        var idOfButtonClicked = this.id;
        var valueOfButtonClicked = document.getElementById(idOfButtonClicked).value;

        document.querySelector(".showInputHere").innerHTML = valueOfButtonClicked;

        

    });
};

 

/*
var idOfButtonClicked = this.id;
var valueOfButtonClicked =document.getElementById(idOfButtonClicked).value;

document.querySelector(".showInputHere").innerHTML = valueOfButtonClicked;

return valueOfButtonClicked */