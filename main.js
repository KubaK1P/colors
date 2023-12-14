const textInput = document.getElementById("exampleInputText1");
const boldCheck = document.getElementById("exampleCheck2");
const cursiveCheck = document.getElementById("exampleCheck1");
const redRange = document.getElementById("redValue");
const greenRange = document.getElementById("greenValue");
const blueRange = document.getElementById("blueValue");
const disp2 = document.getElementById("result");
let isCursive = cursiveCheck.checked;
let isBold = boldCheck.checked;
let text = textInput.value;
let fontSize2 = document.getElementById("displayRange").innerHTML;
let addedText = `<li class=\"list-group-item\">${text}</li>`;
let red = redRange.value;
let green = greenRange.value;
let blue = blueRange.value;
function refreshFontSize() {
     fontSize2 = document.getElementById("displayRange").innerHTML;
}
if (isCursive) {
     text = `<i>${text}</i>`;
} else {
     text = text.replace("<i>", "");
     text = text.replace("</i>", "");
}
if (isBold) {
     text = `<b>${text}</b>`;
} else {
     text = text.replace("<b>", "");
     text = text.replace("</b>", "");
}
function  handleCursive() {
     isCursive  =  cursiveCheck.checked; 
     if (isCursive) {
          text = `<i>${text}</i>`;
     } else {
          text = text.replace("<i>", "");
          text = text.replace("</i>", "");
     }
}
function handleBold() {
     isBold = boldCheck.checked;
     if (isBold) {
          text = `<b>${text}</b>`;
     } else {
          text = text.replace("<b>", "");
          text = text.replace("</b>", "");
     }
}
function handleInputChange() {
     text = textInput.value;
}
function handleRedChange(){
     red = redRange.value;
}
function handleGreenChange(){
     green = greenRange.value;
}
function handleBlueChange(){
     blue = blueRange.value;
}
function showToScreen() {
     addedText = `<li class=\"list-group-item\" style="font-size: ${fontSize2}px; color: rgb(${red}, ${green}, ${blue});">${text}</li>`;
     disp2.innerHTML += addedText;
}
setInterval("refreshFontSize()", 200);