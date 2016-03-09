
//
var comma = ",";
var space = " ";

var inCart = [];
var inCartCount = 0;
var inCartTotal = 0;
var pastInCart = [];
var count = 0;
var shippingFee = 0;

var pageTop = document.getElementById('page-top');
var pageYield = document.getElementById('yield');

var cart = document.getElementById('cart');
var cartCount = document.getElementById('cart-count');
var cartCountValue = document.createTextNode("0");
cartCount.appendChild(cartCountValue);
var showBalance = document.getElementById('show-balance');

var hiddenClass = document.getElementsByClassName('hidden');
var cartPanel = document.getElementById('cart-panel');

var homepage = document.getElementById('main');
var search = document.getElementsByTagName('form')[0];

var checkout = document.getElementById('checkout-button');

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

var detail = document.getElementById('detail');
var detailImg = document.getElementById('detail-img');
var detailName = document.getElementById('detail-name');
var detailPrice = document.getElementById('detail-price');
var detailReviewBar = document.getElementById('detail-reviewbar');
var detailReviewAll = document.getElementById('detail-reviewall');
var detailDescription = document.getElementById('detail-description');
var detailReviews = document.getElementById('detail-reviews');
var detailRecommend = document.getElementById('detail-recommend');
var detailLoad10 = document.getElementById('detail-load-10');
var detailLoad30 = document.getElementById('detail-load-30');
