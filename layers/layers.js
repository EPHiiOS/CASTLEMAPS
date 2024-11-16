var wms_layers = [];

var lyr_gtavatlas8k_0_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "gtavatlas8k_0",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/gtavatlas8k_0_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19999212.967289, -10047232.757265, -19991025.289500, -10039028.331010]
                            })
                        });
var format_POIs_1 = new ol.format.GeoJSON();
var features_POIs_1 = format_POIs_1.readFeatures(json_POIs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIs_1.addFeatures(features_POIs_1);
var lyr_POIs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIs_1, 
                style: style_POIs_1,
                popuplayertitle: "POIs",
                interactive: true,
                title: '<img src="styles/legend/POIs_1.png" /> POIs'
            });
var format_ROLLSStep1_2 = new ol.format.GeoJSON();
var features_ROLLSStep1_2 = format_ROLLSStep1_2.readFeatures(json_ROLLSStep1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROLLSStep1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROLLSStep1_2.addFeatures(features_ROLLSStep1_2);
var lyr_ROLLSStep1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROLLSStep1_2, 
                style: style_ROLLSStep1_2,
                popuplayertitle: "ROLLS Step 1",
                interactive: true,
                title: '<img src="styles/legend/ROLLSStep1_2.png" /> ROLLS Step 1'
            });
var format_RollsStep2_3 = new ol.format.GeoJSON();
var features_RollsStep2_3 = format_RollsStep2_3.readFeatures(json_RollsStep2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RollsStep2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RollsStep2_3.addFeatures(features_RollsStep2_3);
var lyr_RollsStep2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RollsStep2_3, 
                style: style_RollsStep2_3,
                popuplayertitle: "Rolls Step 2",
                interactive: true,
                title: '<img src="styles/legend/RollsStep2_3.png" /> Rolls Step 2'
            });
var format_ATMsOutdoor_4 = new ol.format.GeoJSON();
var features_ATMsOutdoor_4 = format_ATMsOutdoor_4.readFeatures(json_ATMsOutdoor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATMsOutdoor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATMsOutdoor_4.addFeatures(features_ATMsOutdoor_4);
var lyr_ATMsOutdoor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATMsOutdoor_4, 
                style: style_ATMsOutdoor_4,
                popuplayertitle: "ATMs Outdoor",
                interactive: true,
                title: '<img src="styles/legend/ATMsOutdoor_4.png" /> ATMs Outdoor'
            });
var format_ATMSIndoor_5 = new ol.format.GeoJSON();
var features_ATMSIndoor_5 = format_ATMSIndoor_5.readFeatures(json_ATMSIndoor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATMSIndoor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATMSIndoor_5.addFeatures(features_ATMSIndoor_5);
var lyr_ATMSIndoor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATMSIndoor_5, 
                style: style_ATMSIndoor_5,
                popuplayertitle: "ATMS Indoor",
                interactive: true,
                title: '<img src="styles/legend/ATMSIndoor_5.png" /> ATMS Indoor'
            });

lyr_gtavatlas8k_0_0.setVisible(true);lyr_POIs_1.setVisible(true);lyr_ROLLSStep1_2.setVisible(true);lyr_RollsStep2_3.setVisible(true);lyr_ATMsOutdoor_4.setVisible(true);lyr_ATMSIndoor_5.setVisible(true);
var layersList = [lyr_gtavatlas8k_0_0,lyr_POIs_1,lyr_ROLLSStep1_2,lyr_RollsStep2_3,lyr_ATMsOutdoor_4,lyr_ATMSIndoor_5];
lyr_POIs_1.set('fieldAliases', {'INFO': 'INFO', });
lyr_ROLLSStep1_2.set('fieldAliases', {'Day': 'Day', });
lyr_RollsStep2_3.set('fieldAliases', {'id': 'id', });
lyr_ATMsOutdoor_4.set('fieldAliases', {'id': 'id', });
lyr_ATMSIndoor_5.set('fieldAliases', {'id': 'id', });
lyr_POIs_1.set('fieldImages', {'INFO': 'TextEdit', });
lyr_ROLLSStep1_2.set('fieldImages', {'Day': 'TextEdit', });
lyr_RollsStep2_3.set('fieldImages', {'id': 'TextEdit', });
lyr_ATMsOutdoor_4.set('fieldImages', {'id': 'TextEdit', });
lyr_ATMSIndoor_5.set('fieldImages', {'id': 'TextEdit', });
lyr_POIs_1.set('fieldLabels', {'INFO': 'no label', });
lyr_ROLLSStep1_2.set('fieldLabels', {'Day': 'no label', });
lyr_RollsStep2_3.set('fieldLabels', {'id': 'no label', });
lyr_ATMsOutdoor_4.set('fieldLabels', {'id': 'no label', });
lyr_ATMSIndoor_5.set('fieldLabels', {'id': 'no label', });
lyr_ATMSIndoor_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});