function generate(){
    var text = "adffa";
    document.getElementById("generatedText").value = text;
}

function copy(){
    //copy text to clipboard
}

function clear(){
    document.getElementById("generatedText").value = "";
}

document.getElementById("copyButton").onclick = copy;
document.getElementById("clearButton").onclick = clear;
document.getElementById("generateButton").onclick = generate;