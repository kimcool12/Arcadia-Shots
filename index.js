function sidebar(e) {
    let list = document.querySelector("nav ul");

    if (e.name === "grid-outline") {
        e.name = "close";
        list.classList.remove("top-[-400px]", "opacity-0", "pointer-events-none");
        list.classList.add("top-[80px]", "opacity-100", "pointer-events-auto");
    } else {
        e.name = "grid-outline";
        list.classList.remove("top-[80px]", "opacity-100", "pointer-events-auto");
        list.classList.add("top-[-400px]", "opacity-0", "pointer-events-none");
    }
}