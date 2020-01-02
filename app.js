// Variables that are used
const colors = ["#B2BD7E", "#E9D985", "#749C75", "#6A5D7B", "#5D4A66", "#FFA630", "#4DA1A9", "#2E5077", "#611C35", "#7FB069",
    "#CA3C25", "#E6AA68", "#D56AA0", "#A64253", "#861657", "#F5CAC3", "#083D77", "#2E4057", "#F4D35E", "#F6D8AE",
    "white", "white", "white", "black", "black", "black", "black", "black",];
const elements = Math.floor(Math.random() * 42) + 4;
const x = Math.floor(Math.random() * 23) + 3;

// Patterns CSS
// let triangles = "background: linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0, linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0,linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px, linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px, #36c; background-size: 15px 30px;";
const bigChevrons = function (p, b) {
    return `background: linear-gradient(135deg, ${b} 25%, transparent 25%) -50px 0, linear-gradient(225deg, ${b} 25%, transparent 25%) -50px 0, linear-gradient(315deg, ${b} 25%, transparent 25%), linear-gradient(45deg, ${b} 25%, transparent 25%); background-size: 100px 100px; background-color: ${p};`
}
const herringbone = function (p, b) {
    return `background: linear-gradient(135deg, ${p} 21px, ${b} 22px, ${b} 24px, transparent 24px, transparent 67px, ${b} 67px, ${b} 69px, transparent 69px), linear-gradient(225deg, ${p} 21px, ${b} 22px, ${b} 24px, transparent 24px, transparent 67px, ${b} 67px, ${b} 69px, transparent 69px)0 64px; background-color:${p}; background-size: 64px 128px;`
}
const smallChevrons = function (p, b) {
    return `background-color: ${b}; background-size: 58px 58px; background-position: 0px 2px, 4px 35px, 29px 31px, 33px 6px, 0px 36px, 4px 2px, 29px 6px, 33px 30px; background-image: linear-gradient(335deg, ${p} 23px, transparent 23px), linear-gradient(155deg, ${p} 23px, transparent 23px), linear-gradient(335deg, ${p} 23px, transparent 23px), linear-gradient(155deg, ${p} 23px, transparent 23px), linear-gradient(335deg, ${p} 10px, transparent 10px), linear-gradient(155deg, ${p} 10px, transparent 10px), linear-gradient(335deg, ${p} 10px, transparent 10px), linear-gradient(155deg, ${p} 10px, transparent 10px);`
}
const honeycomb = function (p, b) {
    return `background: radial-gradient(circle farthest-side at 0% 50%,${p} 23.5%,rgba(240,166,17,0) 0)21px 30px, radial-gradient(circle farthest-side at 0% 50%,${b} 24%,rgba(240,166,17,0) 0)19px 30px, linear-gradient(${p} 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,${p} 0)0 0, linear-gradient(150deg,${p} 24%,${b} 0,${b} 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,${b} 0,${b} 76%,${p} 0)0 0, linear-gradient(30deg,${p} 24%,${b} 0,${b} 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,${b} 0,${b} 76%,${p} 0)0 0, linear-gradient(90deg,${b} 2%,${p} 0,${p} 98%,${b} 0%)0 0 ${p}; background-size: 40px 60px;`
}

const patternArr = [bigChevrons, herringbone, smallChevrons, honeycomb];

// Variable that will be the HTML code
let gridHtml = "<div class='grid' style='display:grid;grid-template-columns:";

// Function to set the gap between elements
let randomGap = () => {
    let i = Math.floor(Math.random() * 3);
    return i;
}

// Function to select a color
let colorSelector = () => {
    let j = Math.floor(Math.random() * colors.length);
    return j;
}

// Function to select a pattern
const patternSelector = () => {
    return Math.floor(Math.random() * patternArr.length)
}

//Function to set column and row span
let randomSpan = () => {
    let k = Math.floor(Math.random() * 3) + 1;
    return k;
}

// Code to build HTML
// Build CSS to auto format the columns
for (i = 1; i <= x; i++) {
    gridHtml += " auto"
}
// Randomly generate a gap between grid elements
gridHtml += `; grid-gap:${randomGap()}em'>`;


// Build the cells HTML
for (i = 0; i <= elements; i++) {
    let cell = `<div class="cell" style="${patternArr[patternSelector()](colors[colorSelector()], colors[colorSelector()])}; grid-column:span ${randomSpan()}; grid-row:span ${randomSpan()}"></div>`;
    gridHtml += cell;
}
gridHtml += "</div>";

// console.log(gridHtml);

// Function to print the generated HTML/CSS on the DOM
printFunction = () => {
    document.getElementById("gridContainer").innerHTML = gridHtml;
}

// Event listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    printFunction();
})