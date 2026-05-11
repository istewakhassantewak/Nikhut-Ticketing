function createDiv(element) {
    const newDiv = document.createElement("div");
    newDiv.id = "div-" + element
    newDiv.classList.add('flex', 'justify-between', 'md:gap-28')
    newDiv.innerHTML = `<p>${element}</p>
                        <p>Economy</p>
                        <p>550</p>`;
    return newDiv;
}
function addClass(item, text) {
    const element = document.getElementById(item);
    element.classList.add(text);
}
function removeClass(item, text) {
    const element = document.getElementById(item);
    element.classList.remove(text);
}
function discountCalculation(percentage) {
    const grandTotal = document.getElementById('grand-total');
    const totalPrice = document.getElementById('total-price');
    const discountPercentage = document.getElementById('discount-percentage');
    discountPercentage.innerText = percentage + "%";
    const discountedPrice = parseInt(totalPrice.innerText) - (parseInt(totalPrice.innerText) * percentage / 100);
    grandTotal.innerText = discountedPrice;
}
function buttonEnable(item) {
    const element = document.getElementById(item);
    element.disabled = false;
}
function buttonDisable(item) {
    const element = document.getElementById(item);
    element.disabled = true;
}
function setInnerText(item, text) {
    const element = document.getElementById(item);
    element.innerText = text;
}
