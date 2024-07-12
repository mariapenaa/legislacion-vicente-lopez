var DataTypes = require("sequelize").DataTypes;
var _20180824_leg_subtemas = require("./20180824_leg_subtemas");
var _20180824_leg_temas = require("./20180824_leg_temas");
var _20180824_legislacion = require("./20180824_legislacion");
var _admin_log = require("./admin_log");
var _administradores = require("./administradores");
var _aperturas = require("./aperturas");
var _aperturasBCK = require("./aperturasBCK");
var _aperturasOLD = require("./aperturasOLD");
var _aux = require("./aux");
var _calendario = require("./calendario");
var _categorias = require("./categorias");
var _cdtnoticiero = require("./cdtnoticiero");
var _centros_salud = require("./centros_salud");
var _comisarias = require("./comisarias");
var _contactemails = require("./contactemails");
var _cv = require("./cv");
var _cvtits = require("./cvtits");
var _delegaciones = require("./delegaciones");
var _documentos = require("./documentos");
var _dtelefonos = require("./dtelefonos");
var _emails_referentes = require("./emails_referentes");
var _externos = require("./externos");
var _externos_com = require("./externos_com");
var _fechas = require("./fechas");
var _fotografias = require("./fotografias");
var _gacetillas = require("./gacetillas");
var _grilla = require("./grilla");
var _leg_act_adm_rel = require("./leg_act_adm_rel");
var _leg_actua_adm = require("./leg_actua_adm");
var _leg_subtemas = require("./leg_subtemas");
var _leg_subtemas_old = require("./leg_subtemas_old");
var _leg_temas = require("./leg_temas");
var _leg_temas_old = require("./leg_temas_old");
var _legislacion = require("./legislacion");
var _legislacion_exp = require("./legislacion_exp");
var _legislacion_old = require("./legislacion_old");
var _licitaciones = require("./licitaciones");
var _licitacionesBCK2 = require("./licitacionesBCK2");
var _licitacionesBCKUltimo = require("./licitacionesBCKUltimo");
var _licitacionesOLD = require("./licitacionesOLD");
var _log_licitaciones = require("./log_licitaciones");
var _log_usu_web = require("./log_usu_web");
var _lugares = require("./lugares");
var _modulos = require("./modulos");
var _niveles = require("./niveles");
var _notas = require("./notas");
var _notas_aclaratorias = require("./notas_aclaratorias");
var _organigrama = require("./organigrama");
var _paginas = require("./paginas");
var _pares_centros = require("./pares_centros");
var _patentes = require("./patentes");
var _permisos = require("./permisos");
var _programas = require("./programas");
var _prorrogas = require("./prorrogas");
var _pyc_actividades = require("./pyc_actividades");
var _pyc_cursos = require("./pyc_cursos");
var _pyc_empresas = require("./pyc_empresas");
var _pyc_eventos = require("./pyc_eventos");
var _pyc_links = require("./pyc_links");
var _pyc_rubros = require("./pyc_rubros");
var _pyp = require("./pyp");
var _pyp2005 = require("./pyp2005");
var _recibos_emi = require("./recibos_emi");
var _recibos_emi_com = require("./recibos_emi_com");
var _scroll = require("./scroll");
var _secretarias = require("./secretarias");
var _sitios_interes = require("./sitios_interes");
var _svc_hospital = require("./svc_hospital");
var _svc_maternidad = require("./svc_maternidad");
var _telefonos = require("./telefonos");
var _tmp_usuarios = require("./tmp_usuarios");
var _torneos = require("./torneos");
var _tram_subtemas = require("./tram_subtemas");
var _tram_temas = require("./tram_temas");
var _tramites = require("./tramites");
var _tramites_form = require("./tramites_form");
var _twatch_agents = require("./twatch_agents");
var _twatch_agentsc = require("./twatch_agentsc");
var _twatch_agentsc_mon = require("./twatch_agentsc_mon");
var _twatch_allreadt = require("./twatch_allreadt");
var _twatch_browsersc = require("./twatch_browsersc");
var _twatch_browsersc_mon = require("./twatch_browsersc_mon");
var _twatch_cousc = require("./twatch_cousc");
var _twatch_cousc_mon = require("./twatch_cousc_mon");
var _twatch_errors = require("./twatch_errors");
var _twatch_general = require("./twatch_general");
var _twatch_hits = require("./twatch_hits");
var _twatch_hits_mon = require("./twatch_hits_mon");
var _twatch_hourly = require("./twatch_hourly");
var _twatch_hourly_mon = require("./twatch_hourly_mon");
var _twatch_ipcou = require("./twatch_ipcou");
var _twatch_ippages = require("./twatch_ippages");
var _twatch_ipreadt = require("./twatch_ipreadt");
var _twatch_ips = require("./twatch_ips");
var _twatch_miles = require("./twatch_miles");
var _twatch_monreadt = require("./twatch_monreadt");
var _twatch_pages = require("./twatch_pages");
var _twatch_pagesc = require("./twatch_pagesc");
var _twatch_pagesc_mon = require("./twatch_pagesc_mon");
var _twatch_paths = require("./twatch_paths");
var _twatch_refdoms = require("./twatch_refdoms");
var _twatch_refgroupsc = require("./twatch_refgroupsc");
var _twatch_refgroupsc_mon = require("./twatch_refgroupsc_mon");
var _twatch_refs = require("./twatch_refs");
var _twatch_refsc = require("./twatch_refsc");
var _twatch_refsc_mon = require("./twatch_refsc_mon");
var _twatch_robotsc = require("./twatch_robotsc");
var _twatch_robotsc_mon = require("./twatch_robotsc_mon");
var _twatch_sessions = require("./twatch_sessions");
var _twatch_sessions_mon = require("./twatch_sessions_mon");
var _twatch_weekday_mon = require("./twatch_weekday_mon");
var _usu_web = require("./usu_web");
var _usuarios = require("./usuarios");
var _veh = require("./veh");
var _veh2005 = require("./veh2005");
var _veh_2008 = require("./veh_2008");
var _vicentelopez = require("./vicentelopez");
var _vpares_notas = require("./vpares_notas");

function initModels(sequelize) {
  var leg_subtemas = _20180824_leg_subtemas(sequelize, DataTypes);
  var leg_temas = _20180824_leg_temas(sequelize, DataTypes);
  var legislacion = _20180824_legislacion(sequelize, DataTypes);
  var admin_log = _admin_log(sequelize, DataTypes);
  var administradores = _administradores(sequelize, DataTypes);
  var aperturas = _aperturas(sequelize, DataTypes);
  var aperturasBCK = _aperturasBCK(sequelize, DataTypes);
  var aperturasOLD = _aperturasOLD(sequelize, DataTypes);
  var aux = _aux(sequelize, DataTypes);
  var calendario = _calendario(sequelize, DataTypes);
  var categorias = _categorias(sequelize, DataTypes);
  var cdtnoticiero = _cdtnoticiero(sequelize, DataTypes);
  var centros_salud = _centros_salud(sequelize, DataTypes);
  var comisarias = _comisarias(sequelize, DataTypes);
  var contactemails = _contactemails(sequelize, DataTypes);
  var cv = _cv(sequelize, DataTypes);
  var cvtits = _cvtits(sequelize, DataTypes);
  var delegaciones = _delegaciones(sequelize, DataTypes);
  var documentos = _documentos(sequelize, DataTypes);
  var dtelefonos = _dtelefonos(sequelize, DataTypes);
  var emails_referentes = _emails_referentes(sequelize, DataTypes);
  var externos = _externos(sequelize, DataTypes);
  var externos_com = _externos_com(sequelize, DataTypes);
  var fechas = _fechas(sequelize, DataTypes);
  var fotografias = _fotografias(sequelize, DataTypes);
  var gacetillas = _gacetillas(sequelize, DataTypes);
  var grilla = _grilla(sequelize, DataTypes);
  var leg_act_adm_rel = _leg_act_adm_rel(sequelize, DataTypes);
  var leg_actua_adm = _leg_actua_adm(sequelize, DataTypes);
  var leg_subtemas = _leg_subtemas(sequelize, DataTypes);
  var leg_subtemas_old = _leg_subtemas_old(sequelize, DataTypes);
  var leg_temas = _leg_temas(sequelize, DataTypes);
  var leg_temas_old = _leg_temas_old(sequelize, DataTypes);
  var legislacion = _legislacion(sequelize, DataTypes);
  var legislacion_exp = _legislacion_exp(sequelize, DataTypes);
  var legislacion_old = _legislacion_old(sequelize, DataTypes);
  var licitaciones = _licitaciones(sequelize, DataTypes);
  var licitacionesBCK2 = _licitacionesBCK2(sequelize, DataTypes);
  var licitacionesBCKUltimo = _licitacionesBCKUltimo(sequelize, DataTypes);
  var licitacionesOLD = _licitacionesOLD(sequelize, DataTypes);
  var log_licitaciones = _log_licitaciones(sequelize, DataTypes);
  var log_usu_web = _log_usu_web(sequelize, DataTypes);
  var lugares = _lugares(sequelize, DataTypes);
  var modulos = _modulos(sequelize, DataTypes);
  var niveles = _niveles(sequelize, DataTypes);
  var notas = _notas(sequelize, DataTypes);
  var notas_aclaratorias = _notas_aclaratorias(sequelize, DataTypes);
  var organigrama = _organigrama(sequelize, DataTypes);
  var paginas = _paginas(sequelize, DataTypes);
  var pares_centros = _pares_centros(sequelize, DataTypes);
  var patentes = _patentes(sequelize, DataTypes);
  var permisos = _permisos(sequelize, DataTypes);
  var programas = _programas(sequelize, DataTypes);
  var prorrogas = _prorrogas(sequelize, DataTypes);
  var pyc_actividades = _pyc_actividades(sequelize, DataTypes);
  var pyc_cursos = _pyc_cursos(sequelize, DataTypes);
  var pyc_empresas = _pyc_empresas(sequelize, DataTypes);
  var pyc_eventos = _pyc_eventos(sequelize, DataTypes);
  var pyc_links = _pyc_links(sequelize, DataTypes);
  var pyc_rubros = _pyc_rubros(sequelize, DataTypes);
  var pyp = _pyp(sequelize, DataTypes);
  var pyp2005 = _pyp2005(sequelize, DataTypes);
  var recibos_emi = _recibos_emi(sequelize, DataTypes);
  var recibos_emi_com = _recibos_emi_com(sequelize, DataTypes);
  var scroll = _scroll(sequelize, DataTypes);
  var secretarias = _secretarias(sequelize, DataTypes);
  var sitios_interes = _sitios_interes(sequelize, DataTypes);
  var svc_hospital = _svc_hospital(sequelize, DataTypes);
  var svc_maternidad = _svc_maternidad(sequelize, DataTypes);
  var telefonos = _telefonos(sequelize, DataTypes);
  var tmp_usuarios = _tmp_usuarios(sequelize, DataTypes);
  var torneos = _torneos(sequelize, DataTypes);
  var tram_subtemas = _tram_subtemas(sequelize, DataTypes);
  var tram_temas = _tram_temas(sequelize, DataTypes);
  var tramites = _tramites(sequelize, DataTypes);
  var tramites_form = _tramites_form(sequelize, DataTypes);
  var twatch_agents = _twatch_agents(sequelize, DataTypes);
  var twatch_agentsc = _twatch_agentsc(sequelize, DataTypes);
  var twatch_agentsc_mon = _twatch_agentsc_mon(sequelize, DataTypes);
  var twatch_allreadt = _twatch_allreadt(sequelize, DataTypes);
  var twatch_browsersc = _twatch_browsersc(sequelize, DataTypes);
  var twatch_browsersc_mon = _twatch_browsersc_mon(sequelize, DataTypes);
  var twatch_cousc = _twatch_cousc(sequelize, DataTypes);
  var twatch_cousc_mon = _twatch_cousc_mon(sequelize, DataTypes);
  var twatch_errors = _twatch_errors(sequelize, DataTypes);
  var twatch_general = _twatch_general(sequelize, DataTypes);
  var twatch_hits = _twatch_hits(sequelize, DataTypes);
  var twatch_hits_mon = _twatch_hits_mon(sequelize, DataTypes);
  var twatch_hourly = _twatch_hourly(sequelize, DataTypes);
  var twatch_hourly_mon = _twatch_hourly_mon(sequelize, DataTypes);
  var twatch_ipcou = _twatch_ipcou(sequelize, DataTypes);
  var twatch_ippages = _twatch_ippages(sequelize, DataTypes);
  var twatch_ipreadt = _twatch_ipreadt(sequelize, DataTypes);
  var twatch_ips = _twatch_ips(sequelize, DataTypes);
  var twatch_miles = _twatch_miles(sequelize, DataTypes);
  var twatch_monreadt = _twatch_monreadt(sequelize, DataTypes);
  var twatch_pages = _twatch_pages(sequelize, DataTypes);
  var twatch_pagesc = _twatch_pagesc(sequelize, DataTypes);
  var twatch_pagesc_mon = _twatch_pagesc_mon(sequelize, DataTypes);
  var twatch_paths = _twatch_paths(sequelize, DataTypes);
  var twatch_refdoms = _twatch_refdoms(sequelize, DataTypes);
  var twatch_refgroupsc = _twatch_refgroupsc(sequelize, DataTypes);
  var twatch_refgroupsc_mon = _twatch_refgroupsc_mon(sequelize, DataTypes);
  var twatch_refs = _twatch_refs(sequelize, DataTypes);
  var twatch_refsc = _twatch_refsc(sequelize, DataTypes);
  var twatch_refsc_mon = _twatch_refsc_mon(sequelize, DataTypes);
  var twatch_robotsc = _twatch_robotsc(sequelize, DataTypes);
  var twatch_robotsc_mon = _twatch_robotsc_mon(sequelize, DataTypes);
  var twatch_sessions = _twatch_sessions(sequelize, DataTypes);
  var twatch_sessions_mon = _twatch_sessions_mon(sequelize, DataTypes);
  var twatch_weekday_mon = _twatch_weekday_mon(sequelize, DataTypes);
  var usu_web = _usu_web(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var veh = _veh(sequelize, DataTypes);
  var veh2005 = _veh2005(sequelize, DataTypes);
  var veh_2008 = _veh_2008(sequelize, DataTypes);
  var vicentelopez = _vicentelopez(sequelize, DataTypes);
  var vpares_notas = _vpares_notas(sequelize, DataTypes);

  return {
    leg_subtemas,
    leg_temas,
    legislacion,
    admin_log,
    administradores,
    aperturas,
    aperturasBCK,
    aperturasOLD,
    aux,
    calendario,
    categorias,
    cdtnoticiero,
    centros_salud,
    comisarias,
    contactemails,
    cv,
    cvtits,
    delegaciones,
    documentos,
    dtelefonos,
    emails_referentes,
    externos,
    externos_com,
    fechas,
    fotografias,
    gacetillas,
    grilla,
    leg_act_adm_rel,
    leg_actua_adm,
    leg_subtemas_old,
    leg_temas_old,
    legislacion_exp,
    legislacion_old,
    licitaciones,
    licitacionesBCK2,
    licitacionesBCKUltimo,
    licitacionesOLD,
    log_licitaciones,
    log_usu_web,
    lugares,
    modulos,
    niveles,
    notas,
    notas_aclaratorias,
    organigrama,
    paginas,
    pares_centros,
    patentes,
    permisos,
    programas,
    prorrogas,
    pyc_actividades,
    pyc_cursos,
    pyc_empresas,
    pyc_eventos,
    pyc_links,
    pyc_rubros,
    pyp,
    pyp2005,
    recibos_emi,
    recibos_emi_com,
    scroll,
    secretarias,
    sitios_interes,
    svc_hospital,
    svc_maternidad,
    telefonos,
    tmp_usuarios,
    torneos,
    tram_subtemas,
    tram_temas,
    tramites,
    tramites_form,
    twatch_agents,
    twatch_agentsc,
    twatch_agentsc_mon,
    twatch_allreadt,
    twatch_browsersc,
    twatch_browsersc_mon,
    twatch_cousc,
    twatch_cousc_mon,
    twatch_errors,
    twatch_general,
    twatch_hits,
    twatch_hits_mon,
    twatch_hourly,
    twatch_hourly_mon,
    twatch_ipcou,
    twatch_ippages,
    twatch_ipreadt,
    twatch_ips,
    twatch_miles,
    twatch_monreadt,
    twatch_pages,
    twatch_pagesc,
    twatch_pagesc_mon,
    twatch_paths,
    twatch_refdoms,
    twatch_refgroupsc,
    twatch_refgroupsc_mon,
    twatch_refs,
    twatch_refsc,
    twatch_refsc_mon,
    twatch_robotsc,
    twatch_robotsc_mon,
    twatch_sessions,
    twatch_sessions_mon,
    twatch_weekday_mon,
    usu_web,
    usuarios,
    veh,
    veh2005,
    veh_2008,
    vicentelopez,
    vpares_notas,
  };
}

module.exports = initModels;
