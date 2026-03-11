// Appena la pagina si carica animations // 
const titleBtnSection = document.getElementById("title-btn")
const spanH1 = document.getElementById("h1-span")

document.addEventListener("DOMContentLoaded", () => {
    titleBtnSection.classList.add("title-btn-anim")
    spanH1.classList.add("h1-span-bg-anim")
})

//Creazione icone
lucide.createIcons()