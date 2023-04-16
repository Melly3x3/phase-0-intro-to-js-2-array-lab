const app = "I don't do much."

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

function appendCat(name){
    const newCats = [...cats,name] ;
    return newCats;
}

function prependCat(name){
    const newCats = [name, ...cats]
    return newCats;
}

function removeLastCat(name){
    const newcats = cats.slice(0,cats.length-1)
    return newcats;
}

function removeFirstCat(name){
    const newCats = cats.slice(1)
    return newCats;
}