$(document).ready(startScript);

function startScript(){
    document.getElementById("copyButton").onclick = copy;
    document.getElementById("clearButton").onclick = clear;
    document.getElementById("generateButton").onclick = generate;
}

function generate(){
    var text = "adffa"; //placeholder
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
}