document.addEventListener("DOMContentLoaded", () => {
    const flowersContainer = document.getElementById("flowers-container");
    
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = Math.random() * 5 + 5 + "s";
        flower.style.transform = `scale(${Math.random() * 0.7 + 0.5})`;
        flowersContainer.appendChild(flower);
    }
});
