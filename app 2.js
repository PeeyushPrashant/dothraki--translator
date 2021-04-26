var btnTranslate = document.querySelector("#btn-translate");
var txtInput =  document.querySelector("#txt-input");
var outTxt= document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error)
{
    alert("something wrong with the server , try again after some time")
}

function clickHandler(){
 
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
          .then(response => response.json())
          .then(json => {
            var translatedText = json.contents.translated;

            outTxt.innerText= translatedText;
        })
          .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);
   
