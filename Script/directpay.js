

redirect_to_directpay = function(){

	console.log("directpay");
	//window.location.href = "http://192.168.8.103:8000/";
	//window.location.replace("http://192.168.8.103:8000/");
	var  transactionId = "123456";
	var data ={"id":"123456","merchantId":"8369c741-b4f9-49cf-9c1c-53ed5ed964da","amount":"1200.00","rUrl":"http://localhost:5002"};

	
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
	console.log(encodeURIComponent(data.rUrl));
	window.location.href='http://13.58.144.197/default/web/purchase?id='+data.id+'&merchantId='+data.merchantId+'&amount='+data.amount+'&rUrl='+encodeURIComponent(data.rUrl);
	
	
	
	
}
