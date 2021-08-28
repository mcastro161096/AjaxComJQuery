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
        beforeSend: aguardaNota,
        success: exibenota,
        error: retornaErro
    });
}

function exibenota(data){
    if ($.isArray(data)) {
        $("#retorno").empty();
        $.each(data, function(index, value){
            $("#retorno").prepend("Id: " + value.id + "<br>Titulo: " + value.title + "<br>Conteudo: " + value.body + "<br>");

        });
    } else {
        $("#retorno").html("Id: " + Data.id + "<br>Titulo: " + data.title + "<br>Conteudo: " + data.body + "<br>");
    }
    $("#loading").empty();
}

function aguardaNota(){
    $("#loading").html("<img style='width: 15px; margin-left: 10px;' src='https://www.devmedia.com.br/cursos/img/loading.gif' alt='loading'>");
}

function retornaErro(){
    $("#retorno").html("Api fora do ar.");
    $("#loading").empty();
}
