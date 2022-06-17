// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const allCats = [...cats]
    allCats.push(name);
    return allCats
}
function prependCat(name) {
    const allCats = [...cats]
    allCats.unshift(name);
    return allCats
}
function removeLastCat(name) {
    const allCats = [...cats]
    allCats.pop()
    return allCats
}
function removeFirstCat(name) {
    const allCats = [...cats]
    allCats.shift()
    return allCats;
}
