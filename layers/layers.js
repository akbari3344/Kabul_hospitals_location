ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([7669836.022242, 4068295.453027, 7735031.301624, 4117243.417075]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KCB_22D_1 = new ol.format.GeoJSON();
var features_KCB_22D_1 = format_KCB_22D_1.readFeatures(json_KCB_22D_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KCB_22D_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KCB_22D_1.addFeatures(features_KCB_22D_1);
var lyr_KCB_22D_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KCB_22D_1, 
                style: style_KCB_22D_1,
                popuplayertitle: 'KCB_22D',
                interactive: false,
                title: '<img src="styles/legend/KCB_22D_1.png" /> KCB_22D'
            });
var format_Hospitals_2 = new ol.format.GeoJSON();
var features_Hospitals_2 = format_Hospitals_2.readFeatures(json_Hospitals_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_2.addFeatures(features_Hospitals_2);
cluster_Hospitals_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Hospitals_2
});
var lyr_Hospitals_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hospitals_2, 
                style: style_Hospitals_2,
                popuplayertitle: 'Hospitals',
                interactive: true,
                title: '<img src="styles/legend/Hospitals_2.png" /> Hospitals'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KCB_22D_1.setVisible(true);lyr_Hospitals_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KCB_22D_1,lyr_Hospitals_2];
lyr_KCB_22D_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'SUM_AREA_K': 'SUM_AREA_K', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Area': 'Area', });
lyr_Hospitals_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Facility_I': 'Facility_I', 'ViliCode': 'ViliCode', 'Facility_N': 'Facility_N', 'Facility_1': 'Facility_1', 'Facility_2': 'Facility_2', 'Location': 'Location', 'Location_D': 'Location_D', 'Location_P': 'Location_P', 'FacilityTy': 'FacilityTy', 'LAT': 'LAT', 'LON': 'LON', 'ActiveStat': 'ActiveStat', 'Date_Estab': 'Date_Estab', 'SubImpleme': 'SubImpleme', 'LocationSo': 'LocationSo', 'MOPH': 'MOPH', 'HPROReply': 'HPROReply', 'Facility_T': 'Facility_T', 'DIST_CODE': 'DIST_CODE', 'DIST_NA_EN': 'DIST_NA_EN', 'PROV_NA_EN': 'PROV_NA_EN', 'PROV_CODE': 'PROV_CODE', 'HPRO_Facil': 'HPRO_Facil', });
lyr_KCB_22D_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'OID_': 'Range', 'SUM_AREA_K': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_Hospitals_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Facility_I': 'TextEdit', 'ViliCode': 'TextEdit', 'Facility_N': 'TextEdit', 'Facility_1': 'TextEdit', 'Facility_2': 'TextEdit', 'Location': 'TextEdit', 'Location_D': 'TextEdit', 'Location_P': 'TextEdit', 'FacilityTy': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'ActiveStat': 'TextEdit', 'Date_Estab': 'DateTime', 'SubImpleme': 'TextEdit', 'LocationSo': 'TextEdit', 'MOPH': 'TextEdit', 'HPROReply': 'TextEdit', 'Facility_T': 'TextEdit', 'DIST_CODE': 'Range', 'DIST_NA_EN': 'TextEdit', 'PROV_NA_EN': 'TextEdit', 'PROV_CODE': 'Range', 'HPRO_Facil': 'TextEdit', });
lyr_KCB_22D_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'OID_': 'no label', 'SUM_AREA_K': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Area': 'no label', });
lyr_Hospitals_2.set('fieldLabels', {'OBJECTID': 'no label', 'Facility_I': 'no label', 'ViliCode': 'no label', 'Facility_N': 'inline label - always visible', 'Facility_1': 'inline label - always visible', 'Facility_2': 'no label', 'Location': 'no label', 'Location_D': 'no label', 'Location_P': 'no label', 'FacilityTy': 'no label', 'LAT': 'inline label - always visible', 'LON': 'inline label - always visible', 'ActiveStat': 'no label', 'Date_Estab': 'no label', 'SubImpleme': 'no label', 'LocationSo': 'no label', 'MOPH': 'no label', 'HPROReply': 'no label', 'Facility_T': 'inline label - always visible', 'DIST_CODE': 'no label', 'DIST_NA_EN': 'no label', 'PROV_NA_EN': 'no label', 'PROV_CODE': 'no label', 'HPRO_Facil': 'no label', });
lyr_Hospitals_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});