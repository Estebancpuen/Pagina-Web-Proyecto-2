const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
});
