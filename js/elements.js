var comma = ",";
var space = " ";

var inCart = [];
var inCartCount = 0;
var inCartTotal = 0;
var count = 0;
var shippingFee = 0;

var pageYield = document.getElementById('yield');

var cart = document.getElementById('cart');
var cartCount = document.getElementById('cart-count');
var showBalance = document.getElementById('show-balance');

var hiddenClass = document.getElementsByClassName('hidden');
var cartPanel = document.getElementById('cart-panel');

var homepage = document.getElementById('main');
var search = document.getElementsByTagName('form')[0];

var checkout = document.createElement('button');
checkout.className = "btn btn-success";
checkout.setAttribute('style', 'margin-top:5px;position:absolute;right:30px');
var checkoutText = document.createTextNode('Checkout!');
checkout.appendChild(checkoutText);
var checkoutList = document.getElementById('checkout-list');
var checkoutContent = document.getElementById('checkout-content');

var shipOptionStandard = document.getElementById('shipping-options-standard');
var shipOptionTwoDays = document.getElementById('shipping-options-twodays');
var shipOptionSameDay = document.getElementById('shipping-options-sameday');

var confirmAddress = document.getElementById('confirm-address');
var checkoutForm = document.getElementById('checkout-customer-form')
var checkoutPayment = document.getElementById('checkout-payment')

var customerName = document.getElementById('customer-name');
var email = document.getElementById('email');
var address = document.getElementById('address');
var paymentName = document.getElementById('payment-name');
var paymentCardNumber = document.getElementById('payment-cardnumber');
var paymentExpireDate = document.getElementById('payment-expire-date');
var paymentCvv = document.getElementById('payment-cvv');
var paymentAddress = document.getElementById('payment-address');
var checkBillingAddress = document.getElementById('check-address');

var payContinue = document.getElementById('pay-continue-button');
var confirmPage = document.getElementById('confirm-page');
var confirmList = document.getElementById('confirm-list');
var confirmUser = document.getElementById('confirm-user');
var confirmPayment = document.getElementById('confirm-payment');

var payPlaceorder = document.getElementById('pay-placeorder-button');
