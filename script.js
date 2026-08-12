function scrollToMemories() {
    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });
}

function showSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.style.display = "block";

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}