const boxes = document.getElementById('boxes');
const sits = document.getElementById('sits');

let count = 0;

boxes.addEventListener('click', (event) => {

    const box = event.target.innerText;

    const couponField = document.getElementById('coupon');
    const couponButton = document.getElementById('coupon-button');

    if (event.target.classList.contains('box')) {

        if (count < 4) {
            removeClass(box, 'bg-gray-100');
            addClass(box, 'bg-[#1DD100]');

            count = count + 1;

            setInnerText('total-sits', parseInt(document.getElementById('total-sits').innerText) - 1)
            setInnerText('selected-sit', count)

            const totalPrice = count * 550;

            setInnerText('total-price', totalPrice)
            setInnerText('grand-total', totalPrice)

            const newDiv1 = createDiv(event.target.innerText);
            sits.appendChild(newDiv1)

            removeClass(box, 'box')
            addClass(box, 'removebg')

            enableButton();

            if (count == 4) {
                buttonEnable('coupon')

                removeClass('coupon', 'disabled:bg-gray-500')
                removeClass('coupon', 'disabled:cursor-not-allowed')

                buttonEnable('coupon-button')

                removeClass('coupon-button', 'disabled:bg-gray-400')
                removeClass('coupon-button', 'disabled:cursor-not-allowed')

                couponButton.addEventListener('click', applyDiscount)
            }
        }

        else {
            alert("Can't Buy More than 4 tickets")
        }

    }
    else if (event.target.classList.contains('removebg')) {

        removeClass(box, 'bg-[#1DD100]')
        removeClass(box, 'removebg')

        addClass(box, 'bg-gray-100')
        addClass(box, 'box')


        const removeDiv = document.getElementById("div-" + event.target.innerText)
        removeDiv.remove();
        count--;

        setInnerText('total-sits', parseInt(document.getElementById('total-sits').innerText) + 1)

        setInnerText('selected-sit', count)

        const totalPrice = count * 550;

        setInnerText('total-price', totalPrice)
        setInnerText('grand-total', totalPrice)

        enableButton();

        if (count < 4) {
            buttonDisable('coupon')

            addClass('discount-display', 'hidden')

            addClass('coupon', 'disabled:bg-gray-500');
            addClass('coupon', 'disabled:cursor-not-allowed');

            couponField.value = ""

            buttonDisable('coupon-button');

            addClass('coupon-button', 'disabled:bg-gray-400');
            addClass('coupon-button', 'disabled:cursor-not-allowed');

        }
    }

});

function enableButton() {

    const totalSits = parseInt(document.getElementById('selected-sit').innerText)
    const phoneNumber = document.getElementById('phone-number');

    if ((phoneNumber.value.trim() !== "" && !isNaN(phoneNumber.value)) && totalSits > 0) {

        buttonEnable('next-btn')

        removeClass('next-btn', 'disabled:bg-gray-400')
        removeClass('next-btn', 'disabled:cursor-not-allowed')

    } else {

        buttonDisable('next-btn')

        addClass('next-btn', 'disabled:bg-gray-400')
        addClass('next-btn', 'disabled:cursor-not-allowed')

    }
}
const phoneNumber = document.getElementById('phone-number');
phoneNumber.addEventListener('keyup', enableButton);



function applyDiscount() {
    const couponField = document.getElementById('coupon');

    if (couponField.value == "NEW15") {
        removeClass('discount-display', 'hidden')
        addClass('discount-display', 'flex')
        discountCalculation(15)
        couponField.value = ""

    } else if (couponField.value == "Couple 20") {
        removeClass('discount-display', 'hidden')
        addClass('discount-display', 'flex')
        discountCalculation(20)
        couponField.value = ""

    } else {
        alert("Wrong Coupon Code! Enter Valid Coupon code....");
        couponField.value = ""
    }
}
