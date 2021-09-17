var inputText = document.querySelector(".textarea1");

var translationButton = document.querySelector(".btn");

var outputArea = document.querySelector(".textarea2");

var url = "https://api.funtranslations.com/translate/yoda.json"

function createUrl(input){
    return url + "?" + "text=" + input
}

function clickHandler(event){
    var inputTxt = inputText.value;
    fetch(createUrl(inputTxt))
    .then(Response => Response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputArea.innerHTML = translatedText;
    })
}

translationButton.addEventListener("click", clickHandler)