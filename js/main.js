$(document).ready(startScript);

function startScript(){
    $("#copyButton").click(copy);
    $("#clearButton").click(clear);
    $("#generateButton").click(generate);
    $("#hideSpace").click(toggleSpacingOptions);
    $("#customSpace").click(toggleCustomSpace);
    $("#spaceSpace").click(toggleCustomSpace);
    $("#underscoreSpace").click(toggleCustomSpace);
    $("#dashSpace").click(toggleCustomSpace);
}

function generate(){
    let text = "";
    const charSet = getCharacterSet();
    const length = getLength();

    let group = 0;
    let groupSep = "";
    let separate = isSeparate();
    if (separate){
        group = separateBy();
        groupSep = separateWith();
    }

    for (let index = 0; index < length; index++) {
        let r_num = Math.floor(Math.random() * charSet.length);
        text += charSet.substring(r_num,r_num+1);
        if (separate){
            if ((index+1)%group===0 && index !== (length-1)){
                text += groupSep;
            }
        }
    }
    $("#generatedText").val(text);
}

function copy(){
    //copy text to clipboard
    $("#generatedText").focus().select();
    document.execCommand("copy");
}

function clear(){
    //clear generated text field
    $("#generatedText").val("");
}

//Additional functions

function toggleSpacingOptions(){
    //toggle the options under spacing
    let isDisabled = document.getElementById("spacingNum").disabled;
    document.getElementById("spacingNum").disabled = !isDisabled;
    document.getElementById("spaceSpace").disabled = !isDisabled;
    document.getElementById("underscoreSpace").disabled = !isDisabled;
    document.getElementById("dashSpace").disabled = !isDisabled;
    document.getElementById("customSpace").disabled = !isDisabled;
}

function toggleCustomSpace(){
    document.getElementById("customSpaceSet").disabled = !document.getElementById("customSpace").checked;
}

//Functions below are to help the generate function

function getLength(){
    //return the length entered by the user
    return document.getElementById("genSize").value;
}

function getCharacterSet(){
    //return array of characters used
    let finalSet = "";

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
    finalSet += document.getElementById("customSet").value;
    return finalSet;
}

function separateBy(){
    //return the number per group
    return document.getElementById("spacingNum").value;
}

function separateWith(){
    //return the character(s) that separates each group
    if (document.getElementById("spaceSpace").checked){
        //return space
        return ' ';
    }
    if (document.getElementById("underscoreSpace").checked){
        //return underscore
        return '_';
    }
    if (document.getElementById("dashSpace").checked){
        //return dash
        return '-';
    }
    if (document.getElementById("customSpace").checked){
        //return custom field
        return document.getElementById("customSpaceSet").value;
    }
}

function isSeparate(){
    //return if separate is one
    return !(document.getElementById("spacingNum").disabled);
}