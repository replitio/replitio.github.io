//azul = #296191
//rojo = #C46A69
//amarillo = #C79121
//verde =#739E73

function exito(mensaje, titulo){
  titulo || ( titulo = 'Exito !!' );
  mensaje || (mensaje = 'La operación se realizó sin problemas' );
  $.smallBox({
    title : titulo,
    content : '<i class="fa fa-check"></i> '+mensaje+'<i></i>',
    color : "#739E73",
    iconSmall : "fa fa-thumbs-up bounce animated",
    timeout : 5000
  });
}

function error(mensaje, titulo){
  titulo || ( titulo = 'Error !!' );
  mensaje || (mensaje = 'La operación tuvo un problema, si el problema persiste póngase en contacto con RIPIT Chile' );
  $.smallBox({
    title : titulo,
    content : '<i class="fa fa-times"></i> '+mensaje+'<i></i>',
    color : "#C46A69",
    iconSmall : "fa fa-stop-o bounce animated",
    timeout : 5000
  });
}

function load(mensaje, titulo){
  titulo || ( titulo = 'Cargando...' );
  mensaje || (mensaje = 'Se esta llevando acabo la operación, espere un momento...' );
  $.smallBox({
    title : titulo,
    content : '<i class="fa fa-spin fa-spinner"></i> '+mensaje+'<i></i>',
    color : "#296191",
    iconSmall : "fa fa-clock-o bounce animated",
    timeout : 5000
  });
}
