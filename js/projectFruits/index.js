let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let shelf_a_el = document.getElementById("shelf-a-el")
let shelf_b_el = document.getElementById("shelf-b-el")

function sortFruits() {
    for(let i = 0; i < fruit.length; i++) {
        if (fruit[i] == "🍎") { addFruit(shelf_a_el, "🍎")}
        else if (fruit[i] =="🍊") { addFruit(shelf_b_el, "🍊")}
    }
}

function addFruit(el, fruit) {
    el.textContent += fruit
}

sortFruits()