document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const logo = document.getElementById("logo");

    const url1 = "./assets/img/logo/FPSanturtzi_Logo.png";
    const url2 = "./assets/img/logo/FPSanturtzi_Logo_iluna.png";

    //ikusten dugu se tema daukan gordeta erabiltzailea
    const themeGordeta = localStorage.getItem("tema");

    //logoa aldatzeko
    if (themeGordeta === "dark") {
        logo.src = url2;
    } 
    
    if (themeGordeta === "light") {
        logo.src = url1;
    }

    if (themeGordeta === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Theme boia pultzatzean css aldatzen da eta gordetzen da
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("tema", "dark");
                logo.src = url2;

            } else {
                localStorage.setItem("tema", "light");
                logo.src = url1;
            }
        });
    }
});