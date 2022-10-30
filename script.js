// this function will put n img/gift.png elements in grid
function gift() {
    const n = document.getElementById("number").value;
    const grid = document.getElementById("grid");
    // clear grid
    grid.innerHTML = "";
    // grid.innerHTML = n;
    for (let i = 0; i < n; i++) {
        let img = document.createElement("img");
        img.src = "https://cdn.pixabay.com/photo/2016/05/26/17/09/present-1417611_960_720.png";
        img.alt = "gift";
        grid.appendChild(img);
    }
}