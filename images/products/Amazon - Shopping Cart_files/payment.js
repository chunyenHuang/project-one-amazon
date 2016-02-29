// Select Payment Method
 var paymentList = document.getElementsByTagName('li');
 var paymentInput = document.getElementById('payment-input-box');
 var visa = document.getElementById('visa');
 for(var i=0; i < paymentList.length; i+=1){
    paymentList[i].addEventListener('click', function() {
      for(var i=0; i < paymentList.length; i+=1){
        paymentList[i].setAttribute('class', 'list-group-item-noborder');
        var paymentSelect =paymentList[i].getAttribute('name');
        var form = document.getElementById(paymentSelect);
        form.setAttribute('class', 'hidden');
      }
      this.setAttribute('class', 'list-group-item-noborder active');
      var paymentSelect =this.getAttribute('name');
      var form = document.getElementById(paymentSelect);
      form.setAttribute('class', 'active');
   })
 }
 console.log(paymentInput);
