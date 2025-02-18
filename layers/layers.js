ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11795964.961987, 3430056.487543, -11780847.359396, 3437630.714964]);
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
var lyr_20250112LoteNDVIrgb_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-01-12, Lote, NDVI.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250112LoteNDVIrgb_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788288.281963, 3432651.385464, -11787338.553247, 3433583.034464]
        })
    });
var lyr_20250112Lotergb_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-01-12, Lote.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250112Lotergb_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788288.281963, 3432651.385464, -11787338.553247, 3433583.034464]
        })
    });
var lyr_20250117LoteNDVIrgb_7 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-01-17, Lote, NDVI.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250117LoteNDVIrgb_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788288.281963, 3432651.385464, -11787338.553247, 3433583.034464]
        })
    });
var lyr_20250117Lotergb_8 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-01-17, Lote.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250117Lotergb_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788288.281963, 3432651.385464, -11787338.553247, 3433583.034464]
        })
    });
var lyr_20250201LoteNDVIrgb_9 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-02-01, Lote, NDVI.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250201LoteNDVIrgb_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788288.281963, 3432651.385464, -11787338.553247, 3433583.034464]
        })
    });
var lyr_20250201Lotergb_10 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-02-01, Lote.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250201Lotergb_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788288.281963, 3432651.385464, -11787338.553247, 3433583.034464]
        })
    });
var lyr_Lote104LasViborassep2024rgb_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Lote 104 Las Viboras sep 2024.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Lote104LasViborassep2024rgb_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788281.260950, 3432635.485994, -11787324.523101, 3433577.309559]
        })
    });
var lyr_NDVIsep2024Cortergb_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI sep 2024 - Corte.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVIsep2024Cortergb_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.240151, 3432662.367717, -11787342.169339, 3433564.061457]
        })
    });
var lyr_OrtomosaicoCortergb_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ortomosaico - Corte .rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OrtomosaicoCortergb_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.240151, 3432662.367717, -11787342.169339, 3433564.061457]
        })
    });
var format_Plantasenbuenestado111_14 = new ol.format.GeoJSON();
var features_Plantasenbuenestado111_14 = format_Plantasenbuenestado111_14.readFeatures(json_Plantasenbuenestado111_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantasenbuenestado111_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantasenbuenestado111_14.addFeatures(features_Plantasenbuenestado111_14);
var lyr_Plantasenbuenestado111_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantasenbuenestado111_14, 
                style: style_Plantasenbuenestado111_14,
                popuplayertitle: 'Plantas en buen estado 111',
                interactive: true,
                title: '<img src="styles/legend/Plantasenbuenestado111_14.png" /> Plantas en buen estado 111'
            });
var format_Cultivoparaevluacion_15 = new ol.format.GeoJSON();
var features_Cultivoparaevluacion_15 = format_Cultivoparaevluacion_15.readFeatures(json_Cultivoparaevluacion_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cultivoparaevluacion_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cultivoparaevluacion_15.addFeatures(features_Cultivoparaevluacion_15);
var lyr_Cultivoparaevluacion_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cultivoparaevluacion_15, 
                style: style_Cultivoparaevluacion_15,
                popuplayertitle: 'Cultivo para evluacion ',
                interactive: true,
                title: '<img src="styles/legend/Cultivoparaevluacion_15.png" /> Cultivo para evluacion '
            });
var group_Mediciones = new ol.layer.Group({
                                layers: [lyr_Plantasenbuenestado111_14,lyr_Cultivoparaevluacion_15,],
                                fold: "open",
                                title: 'Mediciones '});
var group_Imagenespordrone = new ol.layer.Group({
                                layers: [lyr_NDVIsep2024Cortergb_12,lyr_OrtomosaicoCortergb_13,],
                                fold: "open",
                                title: 'Imagenes por drone '});
var group_Imagenessatelitales = new ol.layer.Group({
                                layers: [lyr_20250216imagendelotesaledaos616hargb_1,lyr_20250216imagendelotesaledaos616haNDVIrgb_2,lyr_20250112LoteNDVICortergb_3,lyr_20250117LoteCortergb_4,lyr_20250112LoteNDVIrgb_5,lyr_20250112Lotergb_6,lyr_20250117LoteNDVIrgb_7,lyr_20250117Lotergb_8,lyr_20250201LoteNDVIrgb_9,lyr_20250201Lotergb_10,lyr_Lote104LasViborassep2024rgb_11,],
                                fold: "open",
                                title: 'Imagenes satelitales '});

lyr_Mapabasesatelital_0.setVisible(true);lyr_20250216imagendelotesaledaos616hargb_1.setVisible(false);lyr_20250216imagendelotesaledaos616haNDVIrgb_2.setVisible(false);lyr_20250112LoteNDVICortergb_3.setVisible(false);lyr_20250117LoteCortergb_4.setVisible(false);lyr_20250112LoteNDVIrgb_5.setVisible(false);lyr_20250112Lotergb_6.setVisible(false);lyr_20250117LoteNDVIrgb_7.setVisible(false);lyr_20250117Lotergb_8.setVisible(false);lyr_20250201LoteNDVIrgb_9.setVisible(false);lyr_20250201Lotergb_10.setVisible(false);lyr_Lote104LasViborassep2024rgb_11.setVisible(false);lyr_NDVIsep2024Cortergb_12.setVisible(true);lyr_OrtomosaicoCortergb_13.setVisible(true);lyr_Plantasenbuenestado111_14.setVisible(true);lyr_Cultivoparaevluacion_15.setVisible(true);
var layersList = [lyr_Mapabasesatelital_0,group_Imagenessatelitales,group_Imagenespordrone,group_Mediciones];
lyr_Plantasenbuenestado111_14.set('fieldAliases', {'color': 'color', 'descriptio': 'descriptio', 'fill': 'fill', 'name': 'name', 'visualType': 'visualType', });
lyr_Cultivoparaevluacion_15.set('fieldAliases', {'color': 'color', 'descriptio': 'descriptio', 'fill': 'fill', 'name': 'name', 'visualType': 'visualType', });
lyr_Plantasenbuenestado111_14.set('fieldImages', {'color': 'TextEdit', 'descriptio': 'TextEdit', 'fill': 'TextEdit', 'name': 'TextEdit', 'visualType': 'TextEdit', });
lyr_Cultivoparaevluacion_15.set('fieldImages', {'color': 'TextEdit', 'descriptio': 'TextEdit', 'fill': 'TextEdit', 'name': 'TextEdit', 'visualType': 'TextEdit', });
lyr_Plantasenbuenestado111_14.set('fieldLabels', {'color': 'inline label - always visible', 'descriptio': 'no label', 'fill': 'no label', 'name': 'inline label - visible with data', 'visualType': 'header label - visible with data', });
lyr_Cultivoparaevluacion_15.set('fieldLabels', {'color': 'inline label - always visible', 'descriptio': 'no label', 'fill': 'no label', 'name': 'no label', 'visualType': 'no label', });
lyr_Cultivoparaevluacion_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});