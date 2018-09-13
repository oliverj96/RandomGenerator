$(document).ready(startScript);

function startScript(){
    document.getElementById("copyButton").onclick = copy;
    document.getElementById("clearButton").onclick = clear;
    document.getElementById("generateButton").onclick = generate;
    document.getElementById("hideSpace").onclick = togleSpacingOptions;
    document.getElementById("customSpace").onclick = toggleCustomSpace;
    document.getElementById("spaceSpace").onclick = toggleCustomSpace;
    document.getElementById("underscoreSpace").onclick = toggleCustomSpace;
    document.getElementById("dashSpace").onclick = toggleCustomSpace;
}

function generate(){
    var text = ""; 
    var charSet = getCharacterSet();
    var length = getLength();

    var group = 0;
    var groupSep = "";
    var separate = isSeparate();
    if (separate){
        group = separateBy();
        groupSep = separateWith();
    }
    console.log(separate);//remove later
    for (let index = 0; index < length; index++) {
        var rnum = Math.floor(Math.random() * charSet.length);
        text += charSet.substring(rnum,rnum+1);
        if (separate){
            if ((index+1)%group==0){
                text += groupSep;
            }
        }
    }
    document.getElementById("generatedText").value = text;
}

function copy(){
    //copy text to clipboard
    document.getElementById("generatedText").focus();
    document.getElementById("generatedText").select();
    document.execCommand("copy");
}

function clear(){
    //clear generated text field
    document.getElementById("generatedText").value = "";
}

//Additional functions

function togleSpacingOptions(){
    //toggle the options under spacing
    //isHidden = isSeperate();
    //document.getElementById("spacingOptions").hidden = !isHidden;
    isDisabled = document.getElementById("spacingNum").disabled;
    document.getElementById("spacingNum").disabled = !isDisabled;
    document.getElementById("spaceSpace").disabled = !isDisabled;
    document.getElementById("underscoreSpace").disabled = !isDisabled;
    document.getElementById("dashSpace").disabled = !isDisabled;
    document.getElementById("customSpace").disabled = !isDisabled;
}

function toggleCustomSpace(){
    if (document.getElementById("customSpace").checked){
        document.getElementById("customSpaceSet").disabled = false;
    }
    else{
        document.getElementById("customSpaceSet").disabled = true;
    }
}

//Functions below are to help the generate function

function getLength(){
    //return the length entered by the user
    num  = document.getElementById("genSize").value;
    return num;
}

function getCharacterSet(){
    //return array of characters used
    var finalSet = ""
    
    if (document.getElementById("numbers").checked){
        finalSet += "0123456789";
    }
    if (document.getElementById("lowercase").checked){
        finalSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("uppercase").checked){
        finalSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("set1").checked){
        finalSet += "!@#$%"
    }

    return finalSet;
}

function separateBy(){
    //return the number per group
    return document.getElementById("spacingNum").value;
}

function separateWith(){
    //return the character(s) that seperates each group
    return ' ';
}

function isSeparate(){
    //return if separate is one
    return !(document.getElementById("spacingNum").disabled);
}