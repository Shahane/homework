console.log("here");


var cities = ['NYC', "SF", 'LA', 'SYD','ATX'];
var cityClasses = ['nyc','sf','la','syndney','austin'];            //  references the css to match the css class

for (var index = 0; index < cities.length; index = index + 1)          // < cities.length will go through all the cites in the array above 
{ 
  var cityName = cities[index];                           // make them  variables 
  var cityClass = cityClasses[index];              // make them  variables 
  
    $('#city-type').append('<option value="' + cityClass + '">' + cityName + '</option>');      // selecting the dom , adding a  variable ( to write it this way  '<otpion>' + variable + '</otpion>' )    console.log (cities[index], cityClasses[index]);             // index just a number , use that number to access value in different arrays
}

$('#city-type').change(function(){     // accessing the dom and changing the css the backround on click 
    var cityClass = $(this).val();
    $('body').removeClass();
    $('body').addClass(cityClass);
    console.log(cityClass);
});

















                                


