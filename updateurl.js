export function updateMapWithRaster(url, mapIndex) {
    console.log(`mapIndex inside updateMapWithRaster: ${mapIndex}`);
    const map = maps[mapIndex-1];
    const existingLayerId = `raster-layer${mapIndex}`;
    if (map.getLayer(existingLayerId)) {
    map.removeLayer(existingLayerId);
    }
    if (map.getSource(`imagery${mapIndex}`)) {
    map.removeSource(`imagery${mapIndex}`);
    }

    const source_id = `imagery${mapIndex}`;
    map.addSource(source_id, {
    type: 'raster',
    tiles: [url],
    });

    map.addLayer({
        id: `raster-layer${mapIndex}`,
        type: 'raster',
        source: source_id,
        paint: {
            'raster-opacity': 0.70,
        },
    });
}
