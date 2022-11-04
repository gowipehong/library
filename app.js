const modalPop = document.getElementById("popUpModal");
const addBtn = document.getElementById("addBtn");


addBtn.onclick = openUp;

function openUp(){
    modalPop.classList.add('active')
}