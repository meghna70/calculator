

$(".equal").click(function(){
    
    var res;
    try{
         res= (eval($("#expression").val()));
    }
    catch (e){
        if(e instanceof SyntaxError){
            window.alert("wrong expression");
            $("#expression").val("0");
            $("#result").val("0");
        }
        if(e instanceof TypeError)
        {
            window.alert("wrong expression");
            $("#expression").val("0");
            $("#result").val("0");
        }
    }
    $("#result").val("= "+res);
    $("#expression").val("0");

});



   $(".col").click(function(){
        if(!$(this).hasClass("non")) {
         if ($("#expression").val() == 0)
            $("#expression").val($(this).text());
        else
            $("#expression").val($("#expression").val() + $(this).val());
    }
});


$('.del').click(function() {
    var value = $("#expression").val();
    if (!(parseInt(parseFloat(value)) == 0 && value.length == 1))
        $("#expression").val(value.slice(0, value.length - 1));
    if (value.length == 1)
        $("#expression").val("0");
});


function clearsc() {
      $("#expression").val(0);
      $("#result").val(0);
};






