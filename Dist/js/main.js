//navigation

const mobileIcon = document.querySelector(".mobileIcon");
const header = document.querySelector("header");

mobileIcon.addEventListener("click", () => {
    header.classList.toggle("active");
});

//resume section

const resBtn = document.querySelectorAll(".btn2");
const resContent = document.querySelectorAll(".contentSection")

resBtn.forEach(button => {
    button.addEventListener("click", ()=>{
        resBtn.forEach(btn => btn.classList.remove('active'));
        resContent.forEach(section => section.style.display = 'none');
        button.classList.add("active");
        document.getElementById(button.id + 'Content').style.display = 'grid';
    })
})

resBtn[0].classList.add('active');
resContent[0].style.display = 'grid';