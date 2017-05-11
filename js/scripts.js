function choose(event) {
    var divCurrent = event.target;
    if((divCurrent.id).substring(0, 4) === 'colo') {
        document.getElementById('color-1').style.backgroundColor = '#fff';
        document.getElementById('color-2').style.backgroundColor = '#fff';
        divCurrent.style.backgroundColor = '#eee';
    }
    if((divCurrent.id).substring(0, 4) === 'size') {
        document.getElementById('size-1').style.backgroundColor = '#fff';
        document.getElementById('size-2').style.backgroundColor = '#fff';
        document.getElementById('size-3').style.backgroundColor = '#fff';
        divCurrent.style.backgroundColor = '#eee';
    }
}

function carousel() {
    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,2000);

    function nextSlide(){
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }
}

function buy(event) {
    document.getElementById('shopping_bag').style.display = 'none';
    document.getElementById('thanks').style.display = 'block';
    document.getElementById('bag').innerHTML = "Bag";
    document.getElementById('mobile-bag').innerHTML = "Bag";
    document.getElementById('total').innerHTML = "";
}

function empty(event) {
    document.getElementById('shopping_bag').style.display = 'none';
    document.getElementById('thanks').style.display = 'block';
    document.getElementById('bag').innerHTML = "Bag";
    document.getElementById('mobile-bag').innerHTML = "Bag";
    document.getElementById('total').innerHTML = "";
    document.getElementById('message').innerHTML = "Your shopping bag is empty. Use Catalog to add new items";
}

var currentPrice = 1640.50;
var currentCount = 3;
//localStorage.setItem('price', currentPrice);
//localStorage.setItem('count', currentCount);

function refresh() {
    var newPrice = localStorage.getItem('price');
    var newCount = localStorage.getItem('count');
    console.log(newCount);
	if (newPrice !== null && newCount !== null) {
		document.getElementById('bag').innerHTML = "Bag &pound; " + newPrice + "(" + newCount + ")";
		document.getElementById('mobile-bag').innerHTML = "Bag &pound; " + newPrice + "(" + newCount + ")";
		document.getElementById('total').innerHTML = "&pound; " + newPrice;
		localStorage.setItem('price', currentPrice);
		localStorage.setItem('count', currentCount);
	} else {
		document.getElementById('bag').innerHTML = "Bag &pound; " + currentPrice + "(" + currentCount + ")";
		document.getElementById('mobile-bag').innerHTML = "Bag &pound; " + currentPrice + "(" + currentCount + ")";
		document.getElementById('total').innerHTML = "&pound; " + currentPrice;
	}
}

function add(event) {
    var priceToAdd = document.getElementById('price').innerHTML;
    priceToAdd = priceToAdd.substring(1, priceToAdd.length - 1);
    priceToAdd = parseFloat(priceToAdd);
    var currentPrice = 1640.50;
    var currentPrice = currentPrice + priceToAdd;
    currentCount = currentCount + 1;
    localStorage.setItem('price', currentPrice);
    localStorage.setItem('count', currentCount);
    var windowNext = window.open('shopping_bag.html', 'windowNext' );
}