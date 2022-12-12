$(function(){
    $('.galeria .contenedor-imagen').on('click', function(){
        $('#modal').modal;
    var ruta_imagen = ($(this).find('img').attr('src'));
    $('#imagen-moda1').attr('src', ruta_imagen);
    });

    $('#modal').on('click',function(){
        $('#modal1').modal('hide');
    });
})