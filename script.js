let button = document.getElementById("enter");
let syncButton = document.getElementById("sync");
let ul = document.querySelector("ul");
let input = document.getElementById("userinput")

const createListElements = () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

const inputLength = () => {
    return input.value.length
}

button.addEventListener("click", () => {
    if (inputLength() > 0) {
        createListElements();
    }
})

input.addEventListener("keypress", () => {
    if (inputLength() > 0 && event.which === 13) {
        createListElements();
    }  
})

syncButton.addEventListener("click", () => {
    if (inputLength() > 0 ) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li);
        let values = ul.appendChild(li)
        let postedValue = {}
        postedValue[values]
        axios.post("https://jsonplaceholder.typicode.com/users", {
             postedValue
        }).then((response) => {
            console.log(response)
        })
        input.value = "";
    }    
})