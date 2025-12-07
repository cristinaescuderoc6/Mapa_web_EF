var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_sombreado_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sombreado<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sombreado_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8399660.670855, -1130068.545555, -8118970.238031, -810091.994623]
        })
    });
var lyr_Dem_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Dem<br />\
    <img src="styles/legend/Dem_2_0.png" /> <= 168.9983<br />\
    <img src="styles/legend/Dem_2_1.png" /> 168.9983 - 197.9988<br />\
    <img src="styles/legend/Dem_2_2.png" /> 197.9988 - 230.9997<br />\
    <img src="styles/legend/Dem_2_3.png" /> 230.9997 - 265.9995<br />\
    <img src="styles/legend/Dem_2_4.png" /> > 265.9995<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Dem_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8399660.670855, -1130068.545555, -8118970.238031, -810091.994623]
        })
    });
var lyr_Pendiente_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pendiente<br />\
    <img src="styles/legend/Pendiente_3_0.png" /> <= 1.6559<br />\
    <img src="styles/legend/Pendiente_3_1.png" /> 1.6559 - 2.6688<br />\
    <img src="styles/legend/Pendiente_3_2.png" /> 2.6688 - 3.9826<br />\
    <img src="styles/legend/Pendiente_3_3.png" /> 3.9826 - 6.3034<br />\
    <img src="styles/legend/Pendiente_3_4.png" /> > 6.3034<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pendiente_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8399660.670855, -1130068.545555, -8118970.238031, -810091.994623]
        })
    });
var format_ie_coronel_portilloef_escudero__ie_coronel_4 = new ol.format.GeoJSON();
var features_ie_coronel_portilloef_escudero__ie_coronel_4 = format_ie_coronel_portilloef_escudero__ie_coronel_4.readFeatures(json_ie_coronel_portilloef_escudero__ie_coronel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ie_coronel_portilloef_escudero__ie_coronel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ie_coronel_portilloef_escudero__ie_coronel_4.addFeatures(features_ie_coronel_portilloef_escudero__ie_coronel_4);
var lyr_ie_coronel_portilloef_escudero__ie_coronel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ie_coronel_portilloef_escudero__ie_coronel_4, 
                style: style_ie_coronel_portilloef_escudero__ie_coronel_4,
                popuplayertitle: 'ie_coronel_portillo — ef_escudero__ie_coronel',
                interactive: true,
                title: '<img src="styles/legend/ie_coronel_portilloef_escudero__ie_coronel_4.png" /> ie_coronel_portillo — ef_escudero__ie_coronel'
            });
var format_distritos_5 = new ol.format.GeoJSON();
var features_distritos_5 = format_distritos_5.readFeatures(json_distritos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distritos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritos_5.addFeatures(features_distritos_5);
var lyr_distritos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distritos_5, 
                style: style_distritos_5,
                popuplayertitle: 'distritos',
                interactive: true,
                title: '<img src="styles/legend/distritos_5.png" /> distritos'
            });
var format_provincia_6 = new ol.format.GeoJSON();
var features_provincia_6 = format_provincia_6.readFeatures(json_provincia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provincia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincia_6.addFeatures(features_provincia_6);
var lyr_provincia_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provincia_6, 
                style: style_provincia_6,
                popuplayertitle: 'provincia',
                interactive: true,
                title: '<img src="styles/legend/provincia_6.png" /> provincia'
            });

lyr_OSMStandard_0.setVisible(true);lyr_sombreado_1.setVisible(true);lyr_Dem_2.setVisible(true);lyr_Pendiente_3.setVisible(true);lyr_ie_coronel_portilloef_escudero__ie_coronel_4.setVisible(true);lyr_distritos_5.setVisible(true);lyr_provincia_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sombreado_1,lyr_Dem_2,lyr_Pendiente_3,lyr_ie_coronel_portilloef_escudero__ie_coronel_4,lyr_distritos_5,lyr_provincia_6];
lyr_ie_coronel_portilloef_escudero__ie_coronel_4.set('fieldAliases', {'fid': 'fid', 'CODLOCAL': 'CODLOCAL', 'NOMCPSIG': 'NOMCPSIG', 'FUENTE_LOC': 'FUENTE_LOC', 'FTE_LOCD': 'FTE_LOCD', 'X_LONGITUD': 'X_LONGITUD', 'Y_LATITUD': 'Y_LATITUD', 'CORD_YX': 'CORD_YX', 'NALT_LOCAL': 'NALT_LOCAL', 'CEN_EDU_L': 'CEN_EDU_L', 'CODCPSIG': 'CODCPSIG', });
lyr_distritos_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'Nombre del distrito ', 'NOMBPROV': 'Nombre de la provincia ', 'NOMBDEP': 'Nombre del departamento ', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', 'videos': 'Video informativo', 'wiki': 'información del distrito', 'imagen': 'Ubicación del distrito', });
lyr_provincia_6.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'Nombre de la provincia', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', 'video': 'Video informativo ', 'wiki': 'Información de la provincia ', 'imagen': 'Ubicación de la provincia ', });
lyr_ie_coronel_portilloef_escudero__ie_coronel_4.set('fieldImages', {'fid': 'TextEdit', 'CODLOCAL': 'TextEdit', 'NOMCPSIG': 'TextEdit', 'FUENTE_LOC': 'TextEdit', 'FTE_LOCD': 'TextEdit', 'X_LONGITUD': 'TextEdit', 'Y_LATITUD': 'TextEdit', 'CORD_YX': 'TextEdit', 'NALT_LOCAL': 'TextEdit', 'CEN_EDU_L': 'TextEdit', 'CODCPSIG': 'TextEdit', });
lyr_distritos_5.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'IDDIST': 'Hidden', 'IDDPTO': 'Hidden', 'IDPROV': 'Hidden', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'DCTO': 'Hidden', 'LEY': 'Hidden', 'FECHA': 'Hidden', 'NOM_CAP': 'Hidden', 'SHAPE_LENG': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LE_1': 'Hidden', 'SHAPE_AR_1': 'Hidden', 'AREA_MINAM': 'Hidden', 'videos': 'TextEdit', 'wiki': 'TextEdit', 'imagen': 'ExternalResource', });
lyr_provincia_6.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDPR': 'Hidden', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'Hidden', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'Hidden', 'video': 'TextEdit', 'wiki': 'TextEdit', 'imagen': 'TextEdit', });
lyr_ie_coronel_portilloef_escudero__ie_coronel_4.set('fieldLabels', {'fid': 'no label', 'CODLOCAL': 'no label', 'NOMCPSIG': 'no label', 'FUENTE_LOC': 'no label', 'FTE_LOCD': 'no label', 'X_LONGITUD': 'no label', 'Y_LATITUD': 'no label', 'CORD_YX': 'no label', 'NALT_LOCAL': 'no label', 'CEN_EDU_L': 'no label', 'CODCPSIG': 'no label', });
lyr_distritos_5.set('fieldLabels', {'NOMBDIST': 'header label - always visible', 'NOMBPROV': 'header label - always visible', 'NOMBDEP': 'header label - always visible', 'videos': 'header label - always visible', 'wiki': 'header label - always visible', 'imagen': 'header label - always visible', });
lyr_provincia_6.set('fieldLabels', {'NOMBPROV': 'header label - always visible', 'video': 'header label - always visible', 'wiki': 'header label - always visible', 'imagen': 'header label - always visible', });
lyr_provincia_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});