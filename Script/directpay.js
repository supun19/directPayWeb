

redirect_to_directpay = function(){

	console.log("directpay");
	//window.location.href = "http://192.168.8.103:8000/";
	//window.location.replace("http://192.168.8.103:8000/");
	var  transactionId = "123456";
	var data ={"id":"123456","merchantId":"d86e8a28-bcb7-47fd-b0e5-2c7cf2d26576","amount":"1200.00"};

	
/*	$.ajax({
    type: "POST",
    url: "http://192.168.8.103:8000/default/web/purchase",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){
		window.location.href='http://192.168.8.103:8000/myqrcode/'+data.id
		//alert(data.id);
		
	},
    failure: function(errMsg) {
        alert(errMsg);
    }
});*/
	
	window.location.href='http://13.58.144.197/default/web/purchase?id='+data.id+'&merchantId='+data.merchantId+'&amount='+data.amount;
	
	
	
	
}
