let queryArray = getQueryArray()


// init template
let val = ""
li_tempalte = 

// get const and let elements
input_el = document.getElementById("input-el")
ul_el = document.getElementById("ul-el")
const input_button = document.getElementById("input-button")
const clear_buttom = document.getElementById("clear-button")


// Press the button -> populate array -> display message -> save in storage
input_button.addEventListener("click", addItem)
clear_buttom.addEventListener("click", clearCache)


// Get the element from the array 

// init array
function getQueryArray() {
    let localQueryArray = localStorage.getItem("queryArray") 
    let queryArray = []
    if (localQueryArray != null) {
        queryArray = JSON.parse(localQueryArray)
    }
    return queryArray
}

function clearCache() {
    queryArray = []
    ul_el.textContent = ""
    input_button.textContent = ""
}

// Add item and save array
function addItem() {
    let val = input_el.value
    queryArray.push(val)
    displayItems()
    localStorage.setItem("queryArray", JSON.stringify(queryArray))
    console.log(queryArray)
}

// Display item
function displayItems() {
    ul_el.textContent = ""
    for (let i = 0; i < queryArray.length; i++) {
        let li = `<li>${queryArray[i]}</li>`    
        ul_el.innerHTML += li
    }
}
