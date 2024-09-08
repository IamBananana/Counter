//console.log("Hello");
//console.log("I like pizza");

//window.alert("This is an alert!");
//window.alert("I like pizza");

/**
 * @author Richie
 * Constants buttons are always going to be linked, hence immutable
 */
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const countLabel = document.getElementById("countLabel");

//Use let so that count is mutable(changeable)
let count = 0;

/**
 * when a function is called onclick it updates the count and then
 * changes the countLabel (<Label> html) to display the new count
 */
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}