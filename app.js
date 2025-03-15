const seatContainer = document.getElementById('seats_container');


const baseSeats = seatContainer.querySelector('#diamond');
const goldSeats = seatContainer.querySelector('#gold');
const platinumSeats = seatContainer.querySelector('#platinum');

const basePrice = baseSeats.querySelector('h4').innerHTML;
const goldPrice = goldSeats.querySelector('h4').innerHTML;
const platinumPrice = platinumSeats.querySelector('h4').innerHTML;

const text = document.querySelector('p');

let totalSelectedSeats = 0;
let total = 0;
const selected = [];


const totalSeats = (price, selectedSeats, isRemoving) => {
    const amount = parseInt(price.split(' ')[1]);
    if (isRemoving) {
        total  -= amount;
        selected.pop();
    } else {
        total += amount;
        selected.push(selectedSeats);
    }
    text.children[0].innerHTML = selected.length;
    text.children[0].style.color = 'blue';
    text.children[1].innerHTML = total;
    text.children[1].style.color = 'blue';
}
baseSeats.addEventListener('click', (e) => {

    if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        totalSelectedSeats--;
        totalSeats(basePrice, totalSelectedSeats, true);
    } else {
        e.target.classList.add('selected');
        totalSelectedSeats++;
        totalSeats(basePrice, 1, false);
    }
});

goldSeats.addEventListener('click', (e) => {
    if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        totalSelectedSeats--;
        totalSeats(goldPrice, totalSelectedSeats, true);
    } else {
        e.target.classList.add('selected');
        totalSelectedSeats++;
        totalSeats(goldPrice, 1, false);
    }

});

platinumSeats.addEventListener('click', (e) => {
    if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        totalSelectedSeats--;
        totalSeats(platinumPrice, totalSelectedSeats, true);
    } else {
        e.target.classList.add('selected');
        totalSelectedSeats++;
        
    }
    totalSeats(platinumPrice, 1);
});


