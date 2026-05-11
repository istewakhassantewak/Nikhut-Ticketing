const boxes = document.getElementById('boxes');
const sits = document.getElementById('sits');

let count = 0;
boxes.addEventListener('click', (event) => {
    const box = document.getElementById(event.target.innerText);
    const selectedSit = document.getElementById('selected-sit')
    const priceTotal = document.getElementsByClassName('priceTotal')[0];
    const grandTotal = document.getElementsByClassName('priceTotal')[1];
    const couponField = document.getElementById('coupon');
    const couponButton = document.getElementById('coupon-button');
    const totalSits = document.getElementById('total-sits');
    if (event.target.classList.contains('box')) {
        if (count < 4) {

            box.classList.remove('bg-gray-100')
            box.classList.add('bg-[#1DD100]')

            count = count + 1;
            totalSits.innerText = parseInt(totalSits.innerText) - 1;
            selectedSit.innerText = count;
            const totalPrice = count * 550;
            priceTotal.innerText = totalPrice;
            grandTotal.innerText = totalPrice;
            console.log(priceTotal.innerText)
            const newDiv1 = createDiv(event.target.innerText);
            sits.appendChild(newDiv1)
            box.classList.remove('box')
            box.classList.add('removebg')
            enableButton();
            if (count == 4) {
                couponField.disabled = false;
                couponField.classList.remove('disabled:bg-gray-500', 'disabled:cursor-not-allowed')
                couponButton.disabled = false;
                couponButton.classList.remove('disabled:bg-gray-400', 'disabled:cursor-not-allowed')
                couponButton.addEventListener('click', applyDiscount)

            }
        }
        else {
            alert("Can't Buy More than 4 tickets")
        }
    }
    else if (event.target.classList.contains('removebg')) {

        box.classList.remove('bg-[#1DD100]', 'removebg');
        box.classList.add('bg-gray-100', 'box');
        const removeDiv = document.getElementById("div-" + event.target.innerText)
        removeDiv.remove();
        count--;
        totalSits.innerText = parseInt(totalSits.innerText) + 1;
        selectedSit.innerText = count;
        const totalPrice = count * 550;
        priceTotal.innerText = totalPrice;
        grandTotal.innerText = totalPrice;
        enableButton();
        if (count < 4) {
            couponField.disabled = true;
            couponField.classList.add('disabled:bg-gray-500', 'disabled:cursor-not-allowed')
            couponField.value = ""
            couponButton.disabled = true;
            couponButton.classList.add('disabled:bg-gray-400', 'disabled:cursor-not-allowed')
        }
    }

});

function enableButton() {
    const selectedSits = document.getElementById('selected-sit');
    const totalSits = parseInt(selectedSits.innerText)
    const phoneNumber = document.getElementById('phone-number');
    const ebtn = document.getElementById('next-btn');
    const isPhoneValid = phoneNumber.value.trim() !== "" && !isNaN(phoneNumber.value);
    const hasSeats = totalSits > 0;

    if (isPhoneValid && hasSeats) {

        ebtn.disabled = false;
        ebtn.classList.remove('disabled:bg-gray-400', 'disabled:cursor-not-allowed')
    } else {
        ebtn.disabled = true;
        ebtn.classList.add('disabled:bg-gray-400', 'disabled:cursor-not-allowed');
    }
}
const phoneNumber = document.getElementById('phone-number');
phoneNumber.addEventListener('keyup', enableButton);
function applyDiscount() {
    const couponField = document.getElementById('coupon');
    const discountDisplay = document.getElementById('discount-display');
    const grandTotal = document.getElementById('grand-total');
    const totalPrice = document.getElementById('total-price');
    const discountPercentage = document.getElementById('discount-percentage');
    if (couponField.value == "NEW15") {
        discountDisplay.classList.remove('hidden');
        discountDisplay.classList.add('flex');
        discountPercentage.innerText = "15%";
        const discountedPrice = parseInt(totalPrice.innerText) - (parseInt(totalPrice.innerText) * 15 / 100);
        grandTotal.innerText = discountedPrice;
        couponField.value = ""

    } else if (couponField.value == "Couple 20") {
        discountDisplay.classList.remove('hidden');
        discountDisplay.classList.add('flex');
        discountPercentage.innerText = "20%";
        const discountedPrice = parseInt(totalPrice.innerText) - (parseInt(totalPrice.innerText) * 20 / 100);
        grandTotal.innerText = discountedPrice;
        couponField.value = ""

    }
}
