function createDiv(element) {
    const newDiv = document.createElement("div");
    newDiv.id = "div-" + element
    newDiv.classList.add('flex', 'justify-between', 'md:gap-28')
    newDiv.innerHTML = `<p>${element}</p>
                        <p>Economy</p>
                        <p>550</p>`;
    return newDiv;
}