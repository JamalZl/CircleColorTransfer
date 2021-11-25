let circles = Array.from(document.querySelectorAll(".circle"))
let dropCircle = document.querySelector(".bigred-circle")
circles.forEach(circle => {
    circle.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id)
    })
    circle.addEventListener("dragend", () => {})


})
dropCircle.ondragenter = function () {}
dropCircle.ondragleave = function () {}
dropCircle.ondragover = function (e) {
    e.preventDefault();
}
dropCircle.ondrop = function (e) {
    let droppedColorId = e.dataTransfer.getData("text")

    console.log(droppedColorId);

    dropCircle.style.backgroundColor = droppedColorId;
}