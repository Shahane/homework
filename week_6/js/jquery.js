
       
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

var cityList = [
  0 = "//images/austin.jpg", // represents val 0,
  1 = "//images/la.jpg", // 1,
  2 = "//images/nyc.jpg",
  3 = "//images/sf.jpg",
  4 = "//images/sydney.jpg",
];

$('#city-type').click(function () {
	     cities = $(this).html();
         var i = i+1;
         var url = 'url('+ cityList[i] + ')';
         $('container').removeClass(); 
         $("container").change("url");

         console.log(url);

         cityList();


     });

 