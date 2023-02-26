let faw = document.getElementById("faw")
let btn = document.getElementById("input-btn")
btn.addEventListener ("click", function() {
    let msg = document.createElement("h1")
    msg.textContent += "Hi I'm Fawzia!"
    faw.append(msg)

})