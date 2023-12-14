const range = document.getElementById("customRange1");
const disp = document.getElementById("displayRange");
let fontSize = 50;
function handleUpdate() {
     fontSize= range.value;
     disp.innerHTML = fontSize;
}