ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11791259.993834, 3431182.594675, -11783701.192538, 3434969.708385]);
var wms_layers = [];


        var lyr_Mapabasesatelital_0 = new ol.layer.Tile({
            'title': 'Mapa base satelital',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_20250216imagendelotesaledaos616hargb_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-02-16, imagen de lotes aledaños 616ha.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250216imagendelotesaledaos616hargb_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11789210.086063, 3431681.378871, -11786273.627109, 3434609.955265]
        })
    });
var lyr_20250216imagendelotesaledaos616haNDVIrgb_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-02-16, imagen de lotes aledaños 616 ha, NDVI.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250216imagendelotesaledaos616haNDVIrgb_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11789210.086063, 3431681.378871, -11786273.627109, 3434609.955265]
        })
    });
var lyr_20250112LoteNDVICortergb_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-01-12, Lote, NDVI - Corte.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250112LoteNDVICortergb_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.639826, 3432680.317766, -11787367.244146, 3433565.396877]
        })
    });
var lyr_20250117LoteCortergb_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-01-17, Lote - Corte .rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250117LoteCortergb_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.639826, 3432680.317766, -11787367.244146, 3433565.396877]
        })
    });
var lyr_NDVIsep2024Cortergb_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI sep 2024 - Corte.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVIsep2024Cortergb_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.240151, 3432662.367717, -11787342.169339, 3433564.061457]
        })
    });
var lyr_OrtomosaicoCortergb_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ortomosaico - Corte .rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OrtomosaicoCortergb_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.240151, 3432662.367717, -11787342.169339, 3433564.061457]
        })
    });
var format_Plantasenbuenestado111_7 = new ol.format.GeoJSON();
var features_Plantasenbuenestado111_7 = format_Plantasenbuenestado111_7.readFeatures(json_Plantasenbuenestado111_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantasenbuenestado111_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantasenbuenestado111_7.addFeatures(features_Plantasenbuenestado111_7);
var lyr_Plantasenbuenestado111_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantasenbuenestado111_7, 
                style: style_Plantasenbuenestado111_7,
                popuplayertitle: 'Plantas en buen estado 111',
                interactive: true,
                title: '<img src="styles/legend/Plantasenbuenestado111_7.png" /> Plantas en buen estado 111'
            });
var format_Cultivoparaevluacion_8 = new ol.format.GeoJSON();
var features_Cultivoparaevluacion_8 = format_Cultivoparaevluacion_8.readFeatures(json_Cultivoparaevluacion_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cultivoparaevluacion_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cultivoparaevluacion_8.addFeatures(features_Cultivoparaevluacion_8);
var lyr_Cultivoparaevluacion_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cultivoparaevluacion_8, 
                style: style_Cultivoparaevluacion_8,
                popuplayertitle: 'Cultivo para evluacion ',
                interactive: true,
                title: '<img src="styles/legend/Cultivoparaevluacion_8.png" /> Cultivo para evluacion '
            });
var group_Mediciones = new ol.layer.Group({
                                layers: [lyr_Plantasenbuenestado111_7,lyr_Cultivoparaevluacion_8,],
                                fold: "open",
                                title: 'Mediciones '});
var group_Imagenespordrone = new ol.layer.Group({
                                layers: [lyr_NDVIsep2024Cortergb_5,lyr_OrtomosaicoCortergb_6,],
                                fold: "open",
                                title: 'Imagenes por drone '});
var group_Imagenessatelitales = new ol.layer.Group({
                                layers: [lyr_20250216imagendelotesaledaos616hargb_1,lyr_20250216imagendelotesaledaos616haNDVIrgb_2,lyr_20250112LoteNDVICortergb_3,lyr_20250117LoteCortergb_4,],
                                fold: "open",
                                title: 'Imagenes satelitales '});

lyr_Mapabasesatelital_0.setVisible(true);lyr_20250216imagendelotesaledaos616hargb_1.setVisible(false);lyr_20250216imagendelotesaledaos616haNDVIrgb_2.setVisible(false);lyr_20250112LoteNDVICortergb_3.setVisible(true);lyr_20250117LoteCortergb_4.setVisible(true);lyr_NDVIsep2024Cortergb_5.setVisible(true);lyr_OrtomosaicoCortergb_6.setVisible(true);lyr_Plantasenbuenestado111_7.setVisible(true);lyr_Cultivoparaevluacion_8.setVisible(true);
var layersList = [lyr_Mapabasesatelital_0,group_Imagenessatelitales,group_Imagenespordrone,group_Mediciones];
lyr_Plantasenbuenestado111_7.set('fieldAliases', {'color': 'color', 'descriptio': 'descriptio', 'fill': 'fill', 'name': 'name', 'visualType': 'visualType', });
lyr_Cultivoparaevluacion_8.set('fieldAliases', {'color': 'color', 'descriptio': 'descriptio', 'fill': 'fill', 'name': 'name', 'visualType': 'visualType', });
lyr_Plantasenbuenestado111_7.set('fieldImages', {'color': 'TextEdit', 'descriptio': 'TextEdit', 'fill': 'TextEdit', 'name': 'TextEdit', 'visualType': 'TextEdit', });
lyr_Cultivoparaevluacion_8.set('fieldImages', {'color': 'TextEdit', 'descriptio': 'TextEdit', 'fill': 'TextEdit', 'name': 'TextEdit', 'visualType': 'TextEdit', });
lyr_Plantasenbuenestado111_7.set('fieldLabels', {'color': 'inline label - always visible', 'descriptio': 'no label', 'fill': 'no label', 'name': 'inline label - visible with data', 'visualType': 'header label - visible with data', });
lyr_Cultivoparaevluacion_8.set('fieldLabels', {'color': 'inline label - always visible', 'descriptio': 'no label', 'fill': 'no label', 'name': 'no label', 'visualType': 'no label', });
lyr_Cultivoparaevluacion_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});