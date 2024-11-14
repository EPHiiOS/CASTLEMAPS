var wms_layers = [];

var lyr_gtavatlas8k_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "gtav atlas 8k",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/gtavatlas8k_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19999212.967289, -10047228.753157, -19991021.289658, -10039028.331010]
                            })
                        });
var format_RollsStep1_1 = new ol.format.GeoJSON();
var features_RollsStep1_1 = format_RollsStep1_1.readFeatures(json_RollsStep1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RollsStep1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RollsStep1_1.addFeatures(features_RollsStep1_1);
var lyr_RollsStep1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RollsStep1_1, 
                style: style_RollsStep1_1,
                popuplayertitle: "Rolls Step 1",
                interactive: true,
                title: '<img src="styles/legend/RollsStep1_1.png" /> Rolls Step 1'
            });
var format_Rollsstep2_2 = new ol.format.GeoJSON();
var features_Rollsstep2_2 = format_Rollsstep2_2.readFeatures(json_Rollsstep2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rollsstep2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rollsstep2_2.addFeatures(features_Rollsstep2_2);
var lyr_Rollsstep2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rollsstep2_2, 
                style: style_Rollsstep2_2,
                popuplayertitle: "Rolls step 2",
                interactive: true,
                title: '<img src="styles/legend/Rollsstep2_2.png" /> Rolls step 2'
            });
var format_POIs_3 = new ol.format.GeoJSON();
var features_POIs_3 = format_POIs_3.readFeatures(json_POIs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIs_3.addFeatures(features_POIs_3);
var lyr_POIs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIs_3, 
                style: style_POIs_3,
                popuplayertitle: "POIs",
                interactive: true,
                title: '<img src="styles/legend/POIs_3.png" /> POIs'
            });
var format_ATMSOUTDOOR_4 = new ol.format.GeoJSON();
var features_ATMSOUTDOOR_4 = format_ATMSOUTDOOR_4.readFeatures(json_ATMSOUTDOOR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATMSOUTDOOR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATMSOUTDOOR_4.addFeatures(features_ATMSOUTDOOR_4);
var lyr_ATMSOUTDOOR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATMSOUTDOOR_4, 
                style: style_ATMSOUTDOOR_4,
                popuplayertitle: "ATMS OUTDOOR",
                interactive: true,
                title: '<img src="styles/legend/ATMSOUTDOOR_4.png" /> ATMS OUTDOOR'
            });
var format_ATMSINDOOR_5 = new ol.format.GeoJSON();
var features_ATMSINDOOR_5 = format_ATMSINDOOR_5.readFeatures(json_ATMSINDOOR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATMSINDOOR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATMSINDOOR_5.addFeatures(features_ATMSINDOOR_5);
var lyr_ATMSINDOOR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATMSINDOOR_5, 
                style: style_ATMSINDOOR_5,
                popuplayertitle: "ATMS INDOOR",
                interactive: true,
                title: '<img src="styles/legend/ATMSINDOOR_5.png" /> ATMS INDOOR'
            });

lyr_gtavatlas8k_0.setVisible(true);lyr_RollsStep1_1.setVisible(true);lyr_Rollsstep2_2.setVisible(true);lyr_POIs_3.setVisible(true);lyr_ATMSOUTDOOR_4.setVisible(true);lyr_ATMSINDOOR_5.setVisible(true);
var layersList = [lyr_gtavatlas8k_0,lyr_RollsStep1_1,lyr_Rollsstep2_2,lyr_POIs_3,lyr_ATMSOUTDOOR_4,lyr_ATMSINDOOR_5];
lyr_RollsStep1_1.set('fieldAliases', {'id': 'id', 'Date': 'Date', });
lyr_Rollsstep2_2.set('fieldAliases', {'id': 'id', 'Riddle': 'Riddle', });
lyr_POIs_3.set('fieldAliases', {'id': 'id', 'INFO': 'INFO', });
lyr_ATMSOUTDOOR_4.set('fieldAliases', {'id': 'id', });
lyr_ATMSINDOOR_5.set('fieldAliases', {'id': 'id', });
lyr_RollsStep1_1.set('fieldImages', {'id': '', 'Date': '', });
lyr_Rollsstep2_2.set('fieldImages', {'id': '', 'Riddle': '', });
lyr_POIs_3.set('fieldImages', {'id': 'TextEdit', 'INFO': 'TextEdit', });
lyr_ATMSOUTDOOR_4.set('fieldImages', {'id': '', });
lyr_ATMSINDOOR_5.set('fieldImages', {'id': '', });
lyr_RollsStep1_1.set('fieldLabels', {'id': 'inline label - always visible', 'Date': 'no label', });
lyr_Rollsstep2_2.set('fieldLabels', {'id': 'no label', 'Riddle': 'inline label - always visible', });
lyr_POIs_3.set('fieldLabels', {'id': 'no label', 'INFO': 'inline label - always visible', });
lyr_ATMSOUTDOOR_4.set('fieldLabels', {'id': 'no label', });
lyr_ATMSINDOOR_5.set('fieldLabels', {'id': 'no label', });
lyr_ATMSINDOOR_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});