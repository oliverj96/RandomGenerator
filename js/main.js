$(document).ready(startScript);

function startScript(){
    document.getElementById("copyButton").onclick = copy;
    document.getElementById("clearButton").onclick = clear;
    document.getElementById("generateButton").onclick = generate;
}

function generate(){
    var text = ""; //placeholder
    var length = getLength();
    for (let index = 0; index < length; index++) {
        
        text += "a";
    }
    document.getElementById("generatedText").value = text;
}

function copy(){
    //copy text to clipboard
    var copyText = document.getElementById("generatedText").value;
    //copyText.select();
    document.execCommand("copy");
}

function clear(){
    //clear generated text field
    document.getElementById("generatedText").value = "";
}

//Functions below are to help the generate function

function getLength(){
    //return the length entered by the user
    num  = document.getElementById("genSize").value;
    return num;
}

function getCharacterSet(){
    //return array of characters used
}

function isSeperate(){
    //return the state of seperate
}

function serperateBy(){
    //return the number per group
}

function serperateWith(){
    //return the character(s) that seperates each group
}