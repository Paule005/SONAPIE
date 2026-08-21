var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ECARTTYPEMOYENNEPARREGION_1 = new ol.format.GeoJSON();
var features_ECARTTYPEMOYENNEPARREGION_1 = format_ECARTTYPEMOYENNEPARREGION_1.readFeatures(json_ECARTTYPEMOYENNEPARREGION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECARTTYPEMOYENNEPARREGION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECARTTYPEMOYENNEPARREGION_1.addFeatures(features_ECARTTYPEMOYENNEPARREGION_1);
var lyr_ECARTTYPEMOYENNEPARREGION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECARTTYPEMOYENNEPARREGION_1, 
                style: style_ECARTTYPEMOYENNEPARREGION_1,
                popuplayertitle: 'ECART TYPE+MOYENNE PAR REGION',
                interactive: false,
    title: 'ECART TYPE+MOYENNE PAR REGION<br />\
    <img src="styles/legend/ECARTTYPEMOYENNEPARREGION_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/ECARTTYPEMOYENNEPARREGION_1_1.png" /> 0 - 342<br />\
    <img src="styles/legend/ECARTTYPEMOYENNEPARREGION_1_2.png" /> 342 - 630<br />\
    <img src="styles/legend/ECARTTYPEMOYENNEPARREGION_1_3.png" /> 630 - 925<br />\
    <img src="styles/legend/ECARTTYPEMOYENNEPARREGION_1_4.png" /> 925 - 1209<br />' });
var format_FINAL_2 = new ol.format.GeoJSON();
var features_FINAL_2 = format_FINAL_2.readFeatures(json_FINAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FINAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FINAL_2.addFeatures(features_FINAL_2);
var lyr_FINAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FINAL_2, 
                style: style_FINAL_2,
                popuplayertitle: 'FINAL',
                interactive: true,
    title: 'FINAL<br />\
    <img src="styles/legend/FINAL_2_0.png" /> Abidjan<br />\
    <img src="styles/legend/FINAL_2_1.png" /> Bagoué<br />\
    <img src="styles/legend/FINAL_2_2.png" /> Béré<br />\
    <img src="styles/legend/FINAL_2_3.png" /> Bounkani<br />\
    <img src="styles/legend/FINAL_2_4.png" /> Folon<br />\
    <img src="styles/legend/FINAL_2_5.png" /> Gbeke<br />\
    <img src="styles/legend/FINAL_2_6.png" /> Gontougo<br />\
    <img src="styles/legend/FINAL_2_7.png" /> Grands Ponts<br />\
    <img src="styles/legend/FINAL_2_8.png" /> Guémon<br />\
    <img src="styles/legend/FINAL_2_9.png" /> Iffou<br />\
    <img src="styles/legend/FINAL_2_10.png" /> Kabadougou<br />\
    <img src="styles/legend/FINAL_2_11.png" /> N\'zi<br />\
    <img src="styles/legend/FINAL_2_12.png" /> Poro<br />\
    <img src="styles/legend/FINAL_2_13.png" /> Sud Comoé<br />\
    <img src="styles/legend/FINAL_2_14.png" /> Tonkpi<br />\
    <img src="styles/legend/FINAL_2_15.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_ECARTTYPEMOYENNEPARREGION_1.setVisible(true);lyr_FINAL_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ECARTTYPEMOYENNEPARREGION_1,lyr_FINAL_2];
lyr_ECARTTYPEMOYENNEPARREGION_1.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'cout/m2_mean': 'cout/m2_mean', 'cout/m2_stddev': 'cout/m2_stddev', });
lyr_FINAL_2.set('fieldAliases', {'fid': 'ID', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'OCCUPANT', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'bailleur': 'BAILLEUR', 'numero_contrat': 'NUMERO DE CONTRAT', 'date': 'DATE', 'localite': 'LOCALITE', 'type_batiment': 'TYPE DE BATIMENT', 'surface': 'SUPERFICIE', 'obs': 'OBSERVATIONS', 'wptx1_WaypointExtension': 'wptx1_WaypointExtension', 'layer': 'layer', 'path': 'path', 'cout/m2': 'COUT/M^2', 'regions': 'REGION', 'departements': 'DEPARTEMENT', 'souspref': 'SOUS-PREFECTURE', 'districts': 'DISTRICT', 'cout/m2_mean': 'MOYENNE DU COUT DU M^2 DANS LA REGION', 'cout/m2_stddev': 'ECART TYPE DU COUT DU M^2 DANS LA REGION', });
lyr_ECARTTYPEMOYENNEPARREGION_1.set('fieldImages', {'fid': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'cout/m2_mean': 'TextEdit', 'cout/m2_stddev': 'TextEdit', });
lyr_FINAL_2.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', 'bailleur': 'TextEdit', 'numero_contrat': 'TextEdit', 'date': 'DateTime', 'localite': 'TextEdit', 'type_batiment': 'TextEdit', 'surface': 'TextEdit', 'obs': 'TextEdit', 'wptx1_WaypointExtension': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'cout/m2': 'TextEdit', 'regions': 'TextEdit', 'departements': 'TextEdit', 'souspref': 'TextEdit', 'districts': 'TextEdit', 'cout/m2_mean': 'TextEdit', 'cout/m2_stddev': 'TextEdit', });
lyr_ECARTTYPEMOYENNEPARREGION_1.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', 'cout/m2_mean': 'no label', 'cout/m2_stddev': 'no label', });
lyr_FINAL_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'ele': 'hidden field', 'time': 'hidden field', 'magvar': 'hidden field', 'geoidheight': 'hidden field', 'name': 'inline label - visible with data', 'cmt': 'hidden field', 'desc': 'hidden field', 'src': 'hidden field', 'link1_href': 'hidden field', 'link1_text': 'hidden field', 'link1_type': 'hidden field', 'link2_href': 'hidden field', 'link2_text': 'hidden field', 'link2_type': 'hidden field', 'sym': 'hidden field', 'type': 'hidden field', 'fix': 'hidden field', 'sat': 'hidden field', 'hdop': 'hidden field', 'vdop': 'hidden field', 'pdop': 'hidden field', 'ageofdgpsdata': 'hidden field', 'dgpsid': 'hidden field', 'bailleur': 'inline label - visible with data', 'numero_contrat': 'inline label - visible with data', 'date': 'inline label - visible with data', 'localite': 'inline label - visible with data', 'type_batiment': 'inline label - visible with data', 'surface': 'inline label - visible with data', 'obs': 'inline label - visible with data', 'wptx1_WaypointExtension': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'cout/m2': 'inline label - visible with data', 'regions': 'inline label - visible with data', 'departements': 'inline label - visible with data', 'souspref': 'inline label - visible with data', 'districts': 'inline label - visible with data', 'cout/m2_mean': 'inline label - visible with data', 'cout/m2_stddev': 'inline label - visible with data', });
lyr_FINAL_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});