

let myLeader = []
const inputText = document.getElementById("input-text")
const btnClick = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeader") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeader = leadsFromLocalStorage
    render(myLeader)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeader.push(tabs[0].url)
        localStorage.setItem("myLeader", JSON.stringify(myLeader))
        render(myLeader)
    })
})

function render(Leads) {
    let listItem = ""
    for (let i = 0; i < Leads.length; i++) {
        listItem += `
            <li>
                <a target ='_blank' href='${Leads[i]}'>
                ${Leads[i]}
                </a>
            </li>
        ` 

        // listItem += '<li>' + myLeader[i] + '</li>'
    }
    ulEl.innerHTML = listItem
    
}


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeader = []
    render(myLeader)
})


btnClick.addEventListener("click", function() {
    myLeader.push(inputText.value)
    inputText.value = ""
    localStorage.setItem ("myLeader", JSON.stringify(myLeader))
    render(myLeader)
})

    
        // ulEl.innerHTML += "<li>" + myLeader[i] + "</li>"
        // const li  = document.createElement("li")
        // li.textContent = myLeader[i]
        // ulEl.append()
