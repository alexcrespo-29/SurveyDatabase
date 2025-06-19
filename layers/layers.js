var wms_layers = [];

var format_2025_Parcels_Winslow_Twp_0 = new ol.format.GeoJSON();
var features_2025_Parcels_Winslow_Twp_0 = format_2025_Parcels_Winslow_Twp_0.readFeatures(json_2025_Parcels_Winslow_Twp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2025_Parcels_Winslow_Twp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025_Parcels_Winslow_Twp_0.addFeatures(features_2025_Parcels_Winslow_Twp_0);
var lyr_2025_Parcels_Winslow_Twp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025_Parcels_Winslow_Twp_0, 
                style: style_2025_Parcels_Winslow_Twp_0,
                popuplayertitle: '2025_Parcels_Winslow_Twp',
                interactive: true,
                title: '<img src="styles/legend/2025_Parcels_Winslow_Twp_0.png" /> 2025_Parcels_Winslow_Twp'
            });
var format_survey_boundaries_1 = new ol.format.GeoJSON();
var features_survey_boundaries_1 = format_survey_boundaries_1.readFeatures(json_survey_boundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_survey_boundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_survey_boundaries_1.addFeatures(features_survey_boundaries_1);
var lyr_survey_boundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_survey_boundaries_1, 
                style: style_survey_boundaries_1,
                popuplayertitle: 'survey_boundaries',
                interactive: true,
                title: '<img src="styles/legend/survey_boundaries_1.png" /> survey_boundaries'
            });

lyr_2025_Parcels_Winslow_Twp_0.setVisible(true);lyr_survey_boundaries_1.setVisible(true);
var layersList = [lyr_2025_Parcels_Winslow_Twp_0,lyr_survey_boundaries_1];
lyr_2025_Parcels_Winslow_Twp_0.set('fieldAliases', {'PAMS_PIN': 'PAMS_PIN', 'MUN': 'MUN', 'BLOCK': 'BLOCK', 'LOT': 'LOT', 'QCODE': 'QCODE', 'LASTUPDATE': 'LASTUPDATE', 'PIN_NODUP': 'PIN_NODUP', 'DUP': 'DUP', 'PUB_DATE': 'PUB_DATE', 'PCL_GUID': 'PCL_GUID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'FID_': 'FID_', 'OBJECTID_1': 'OBJECTID_1', 'MUN_1': 'MUN_1', 'COUNTY': 'COUNTY', 'MUN_LABEL': 'MUN_LABEL', 'MUN_TYPE': 'MUN_TYPE', 'NAME': 'NAME', 'GNIS_NAME': 'GNIS_NAME', 'GNIS': 'GNIS', 'SSN': 'SSN', 'MUN_CODE': 'MUN_CODE', 'KEY': 'KEY', 'CENSUS2010': 'CENSUS2010', 'ACRES': 'ACRES', 'SQ_MILES': 'SQ_MILES', 'POP2010': 'POP2010', 'POP2000': 'POP2000', 'POP1990': 'POP1990', 'POP1980': 'POP1980', 'POPDEN2010': 'POPDEN2010', 'POPDEN2000': 'POPDEN2000', 'POPDEN1990': 'POPDEN1990', 'POPDEN1980': 'POPDEN1980', 'GLOBALID': 'GLOBALID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_survey_boundaries_1.set('fieldAliases', {'fid': 'fid', 'Survey_Name': 'Survey_Name', 'Survey_Date': 'Survey_Date', 'PDF_Link': 'PDF_Link', });
lyr_2025_Parcels_Winslow_Twp_0.set('fieldImages', {'PAMS_PIN': '', 'MUN': '', 'BLOCK': '', 'LOT': '', 'QCODE': '', 'LASTUPDATE': '', 'PIN_NODUP': '', 'DUP': '', 'PUB_DATE': '', 'PCL_GUID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'FID_': '', 'OBJECTID_1': '', 'MUN_1': '', 'COUNTY': '', 'MUN_LABEL': '', 'MUN_TYPE': '', 'NAME': '', 'GNIS_NAME': '', 'GNIS': '', 'SSN': '', 'MUN_CODE': '', 'KEY': '', 'CENSUS2010': '', 'ACRES': '', 'SQ_MILES': '', 'POP2010': '', 'POP2000': '', 'POP1990': '', 'POP1980': '', 'POPDEN2010': '', 'POPDEN2000': '', 'POPDEN1990': '', 'POPDEN1980': '', 'GLOBALID': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', });
lyr_survey_boundaries_1.set('fieldImages', {'fid': 'TextEdit', 'Survey_Name': 'TextEdit', 'Survey_Date': 'DateTime', 'PDF_Link': 'TextEdit', });
lyr_2025_Parcels_Winslow_Twp_0.set('fieldLabels', {'PAMS_PIN': 'no label', 'MUN': 'no label', 'BLOCK': 'no label', 'LOT': 'no label', 'QCODE': 'no label', 'LASTUPDATE': 'no label', 'PIN_NODUP': 'no label', 'DUP': 'no label', 'PUB_DATE': 'no label', 'PCL_GUID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'FID_': 'no label', 'OBJECTID_1': 'no label', 'MUN_1': 'no label', 'COUNTY': 'no label', 'MUN_LABEL': 'no label', 'MUN_TYPE': 'no label', 'NAME': 'no label', 'GNIS_NAME': 'no label', 'GNIS': 'no label', 'SSN': 'no label', 'MUN_CODE': 'no label', 'KEY': 'no label', 'CENSUS2010': 'no label', 'ACRES': 'no label', 'SQ_MILES': 'no label', 'POP2010': 'no label', 'POP2000': 'no label', 'POP1990': 'no label', 'POP1980': 'no label', 'POPDEN2010': 'no label', 'POPDEN2000': 'no label', 'POPDEN1990': 'no label', 'POPDEN1980': 'no label', 'GLOBALID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', });
lyr_survey_boundaries_1.set('fieldLabels', {'fid': 'no label', 'Survey_Name': 'no label', 'Survey_Date': 'no label', 'PDF_Link': 'no label', });
lyr_survey_boundaries_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});