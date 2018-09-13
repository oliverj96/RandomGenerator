$(document).ready(startScript);

function startScript(){
    document.getElementById("copyButton").onclick = copy;
    document.getElementById("clearButton").onclick = clear;
    document.getElementById("generateButton").onclick = generate;
    document.getElementById("hideSpace").onclick = togleSpacingOptions;
}

function generate(){
    var text = ""; //placeholderr 
    var charSet = getCharacterSet();
    var length = getLength();
    for (let index = 0; index < length; index++) {
        var rnum = Math.floor(Math.random() * charSet.length);
		text += charSet.substring(rnum,rnum+1);
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

//Additional functions

function togleSpacingOptions(){
    //toggle the options under spacing
    isHidden = isSeperate();
    document.getElementById("spacingOptions").hidden = !isHidden;
}

//Functions below are to help the generate function

function getLength(){
    //return the length entered by the user
    num  = document.getElementById("genSize").value;
    return num;
}

function getCharacterSet(){
    //return array of characters used
    var set1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var set2 = "abcdefghijklmnopqrstuvwxyz";
    var set3 = "0123456789";
    var set4 = "!@#$%"
    return set1+set2+set3+set4;
}

function isSeperate(){
    //return the state of seperate
    return document.getElementById("spacingOptions").hidden;
}

function serperateBy(){
    //return the number per group
}

function serperateWith(){
    //return the character(s) that seperates each group
}