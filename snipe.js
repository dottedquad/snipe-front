    function getsnipes(){
        alert('json');
         $.get("http://c3po:3647/snipes",
         	function(data) {
         		$("#snipes").empty();
         		data.forEach(function(element) {
         			$("#snipes").append("<div id=\"" + element.auctionId + "\" />");
         			$.get("http://c3po:3647/auction/" + element.auctionId),
         				function(data) {
         					$("#" + element.auctionId).append("<h2>" + data.title + "</h2>");
         					$("#" + element.auctionId).append("<p>Item <a href=\"http://www.ebay.com/itm/" + element.auctionId + "\"></p>");
         					$("#" + element.auctionId).append("<p>Snipe For " + element.bid + "</p>");
         					$("#" + element.auctionId).append("<p>Current Bid " + data.currentBid + "</p>");
         					$("#" + element.auctionId).append("<img src=\"" + data.thumbnailUrl + "\" />");
         				});
         		});
            	alert(String(data));
            });
    }

    //$('#ajax').click(function(){
    //    alert('ajax');
    //     $.ajax({
    //         type: "GET",
    //         dataType: "json",
    //         url: "http://localhost:8080/restws/json/product/get",
    //         success: function(data){
    //            alert(data);
    //         }
    //     });
    //});
