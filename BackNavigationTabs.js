$(document).ready(function() {
// add a hash to the URL when the user clicks on a tab

var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var is_safari = /^((?!chrome).)*safari/i.test(navigator.userAgent);
if(is_chrome || is_safari)
{
    document.getElementById("startid").href = "##start";
}
//adding a comment
//adding another one

if(window.location.hash){
   var a = $('[href=' + location.hash + ']'); 
   a && a.tab('show'); 
}
else{
   if(is_chrome || is_safari){
   history.replaceState(undefined, undefined, "##start");}
   else{
	   history.replaceState(undefined, undefined, "#start");
   }
}
$('a[data-toggle="pill"]').on('click', function(e) {
history.pushState(null, null, $(this).attr('href'));
});
// navigate to a tab when the history changes
window.addEventListener("popstate", function(e) {
//removing the following two lines of codes results in the back button breaking.
   var a = $('[href=' + location.hash + ']'); 
   a && a.tab('show');
});

});
