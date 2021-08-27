$(document).ready(function(){
$("#enviar").on("click", cliquebotao);
});

function cliquebotao(event){
    event.preventDefault();
    var id = $("#id_nota").val();

    jQuery.ajax({
        type: "GET",
        datatype: "json",
        url: "http://devmedianotesapi.azurewebsites.net/api/notes/"+id,
        success: exibenota,
        error: $("#retorno").html("Api fora do ar.")
    });
}

function exibenota(data){
    if ($.isArray(data)) {
        $("#retorno").html("");
        $.each(data, function(index, value){
            $("#retorno").prepend("Id: " + value.id + "<br>Titulo: " + value.title + "<br>Conteudo: " + value.body + "<br>");

        });
    } else {
        $("#retorno").html("Id: " + Data.id + "<br>Titulo: " + data.title + "<br>Conteudo: " + data.body + "<br>");
    }
}
