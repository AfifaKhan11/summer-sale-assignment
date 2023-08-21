document.getElementById('btn-apply') .addEventListener ('click' ,function (){

    const couponInputField = document.getElementById('coupon-code');
    const couponInputFieldCode = couponInputField.value;
    
    console.log(couponInputFieldCode);

    if(couponInputFieldCode === 'SELL200'){

        const totalPrice = document.getElementById('total-price');
        const totalPriceString = totalPrice.innerText;
        const oldTotalAmount = parseFloat(totalPriceString);
    

        const afterDiscount= oldTotalAmount * 0.2

        const newTotalAmmount= oldTotalAmount - afterDiscount

        const disPrice = document.getElementById('dis-price');
        disPrice.innerText=afterDiscount.toFixed(2)


        const finalPrice = document.getElementById('final-price');
        finalPrice.innerText=newTotalAmmount
    }



})



document.getElementById('item-one').addEventListener('click', function () {

    const itemOnePrice = document.getElementById('price-one');
    const itemOnePriceString = itemOnePrice.innerText;
    const itemOnePriceAmount = parseFloat(itemOnePriceString);


    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const oldTotalAmount = parseFloat(totalPriceString);

    const totalItemsAmount = itemOnePriceAmount + oldTotalAmount;
    console.log(totalItemsAmount);
    totalPrice.innerText=totalItemsAmount


    // 
    const listItemContainer = document.getElementById('main-name-container');

    const itemName = document.getElementById('item-one-name').innerText;
    
    const li= document.createElement('li')
    li.innerText=itemName;
    listItemContainer.appendChild(li)
    
})

// Items Two
document.getElementById('item-two').addEventListener('click', function () {

    const itemtwoPrice = document.getElementById('price-two');
    const itemTwoPriceString = itemtwoPrice.innerText;
    const itemTwoPriceAmount = parseFloat(itemTwoPriceString);


    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const oldTotalAmount = parseFloat(totalPriceString);

    const totalItemsAmount = itemTwoPriceAmount + oldTotalAmount;
    console.log(totalItemsAmount);
    totalPrice.innerText=totalItemsAmount

    
    // 
    const listItemContainer = document.getElementById('main-name-container');

    const itemName = document.getElementById('item-two-name').innerText;
    
    const li= document.createElement('li')
    li.innerText=itemName;
    listItemContainer.appendChild(li)


})

// Items Three
document.getElementById('item-three').addEventListener('click', function () {

    const itemthreePrice = document.getElementById('price-three');
    const itemthreePriceString = itemthreePrice.innerText;
    const itemthreePriceAmount = parseFloat(itemthreePriceString);


    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const oldTotalAmount = parseFloat(totalPriceString);

    const totalItemsAmount = itemthreePriceAmount + oldTotalAmount;
    console.log(totalItemsAmount);
    totalPrice.innerText=totalItemsAmount

    
    // 
    const listItemContainer = document.getElementById('main-name-container');

    const itemName = document.getElementById('item-three-name').innerText;
    
    const li= document.createElement('li')
    li.innerText=itemName;
    listItemContainer.appendChild(li)



})


// Items Four
document.getElementById('item-four').addEventListener('click', function () {

    const itemfourPrice = document.getElementById('price-four');
    const itemfourPriceString = itemfourPrice.innerText;
    const itemfourPriceAmount = parseFloat(itemfourPriceString);


    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const oldTotalAmount = parseFloat(totalPriceString);

    const totalItemsAmount = itemfourPriceAmount + oldTotalAmount;
    console.log(totalItemsAmount);
    totalPrice.innerText=totalItemsAmount

    
    // 
    const listItemContainer = document.getElementById('main-name-container');

    const itemName = document.getElementById('item-four-name').innerText;
    
    const li= document.createElement('li')
    li.innerText=itemName;
    listItemContainer.appendChild(li)


})

// Items Two
document.getElementById('item-five').addEventListener('click', function () {

    const itemfivePrice = document.getElementById('price-five');
    const itemfivePriceString = itemfivePrice.innerText;
    const itemfivePriceAmount = parseFloat(itemfivePriceString);


    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const oldTotalAmount = parseFloat(totalPriceString);

    const totalItemsAmount = itemfivePriceAmount + oldTotalAmount;
    console.log(totalItemsAmount);
    totalPrice.innerText=totalItemsAmount

    
    // 
    const listItemContainer = document.getElementById('main-name-container');

    const itemName = document.getElementById('item-five-name').innerText;
    
    const li= document.createElement('li')
    li.innerText=itemName;
    listItemContainer.appendChild(li)



})


// Items Six
document.getElementById('item-six').addEventListener('click', function () {

    const itemsixPrice = document.getElementById('price-six');
    const itemsixPriceString = itemsixPrice.innerText;
    const itemsixPriceAmount = parseFloat(itemsixPriceString);


    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const oldTotalAmount = parseFloat(totalPriceString);

    const totalItemsAmount = itemsixPriceAmount + oldTotalAmount;
    console.log(totalItemsAmount);
    totalPrice.innerText=totalItemsAmount

    
    // 
    const listItemContainer = document.getElementById('main-name-container');

    const itemName = document.getElementById('item-six-name').innerText;
    
    const li= document.createElement('li')
    li.innerText=itemName;
    listItemContainer.appendChild(li)



})

