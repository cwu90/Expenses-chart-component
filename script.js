'strict';

import myJson from './data.json' assert { type: 'json' };

const total = document.getElementById('total-number');
const bars = document.querySelectorAll('.bar-data');
const popup = document.querySelectorAll('.popup');

// Attach JSON data to graph & Cclculate total amount from JSON data
(function () {
  const totalAmount = myJson
    .map(myJson => myJson.amount)
    .reduce((total, bill) => bill + total);
  total.innerHTML = `$${totalAmount}`;

  for (let i = 0; i < myJson.length; i++) {
    bars[i].style.height = `${myJson[i].amount * 2}px`;
    popup[i].innerHTML = `$${myJson[i].amount}`;
  }
})();

//Pop-up data
bars.forEach(bar => {
  bar.addEventListener('mouseenter', function (e) {
    bar.previousElementSibling.classList.add('add');

    bar.addEventListener('mouseout', function (e) {
      bar.previousElementSibling.classList.remove('add');
    });
  });
});
