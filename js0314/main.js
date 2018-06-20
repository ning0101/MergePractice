$(document).ready(function(){
    $("#place").click(function()
    {
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
  
    });
});

$(document).ready(function(){
    $("#dog").click(function()
    {
        var numberOfListItem = $("#choicesa li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H2").text($("#choicesa li").eq(randomChildNumber).text());
  
    });
});
