document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.order-button').forEach(function(button) {
      button.addEventListener('click', function() {
          let foodName = this.getAttribute('order_item');
          let foodPrice = this.getAttribute('order_price');
          localStorage.setItem('foodName', foodName);
          localStorage.setItem('foodAmount', foodPrice);
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const name1 = localStorage.getItem('foodName');
  const amount = localStorage.getItem('foodAmount');
  document.getElementById('head').innerText = name1;
  document.getElementById('amt').innerText = amount;
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const cardName = document.getElementById('cardName').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const expirationDate = document.getElementById('expirationDate').value;
  const cvv = document.getElementById('cvv').value;

  if (!cardName || !cardNumber || !expirationDate || !cvv) {
    alert('Please fill in all fields.');
    return;
  }
  console.log('Payment submitted', { cardName, cardNumber, expirationDate, cvv });

  alert('Payment submitted successfully!');
  document.getElementById('paymentForm').reset();
});