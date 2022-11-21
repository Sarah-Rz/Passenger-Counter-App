let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

increment = () => {
    count += 1
    countEl.innerHTML = count
}

save = () => {
   let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.innerHTML = 0
    count = 0
}

del = () => {
    saveEl.innerHTML = "Previous entries: "
}
