export function renderCategoricalLegend(legendElement, stops) {
    const legendItemContainer = document.createElement('div');
    legendItemContainer.className = 'legend-item-container';

    stops.forEach((stop, index) => {
        const color = stop.color;
        const label = stop.label;

        const item = document.createElement('div');
        item.className = 'legend-item';

        const colorBox = document.createElement('span');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;

        const labelSpan = document.createElement('span');
        labelSpan.className = 'label-text';
        labelSpan.textContent = label;

        item.appendChild(colorBox);
        item.appendChild(labelSpan);

        legendItemContainer.appendChild(item);
    });

    legendElement.appendChild(legendItemContainer);
}

export function renderGradientLegend(legendElement, colormapScale, rescale) {
    const stops = colormapScale;
    const min = rescale[0];
    const max = rescale[1];
    const range = max - min;

    const legendItemContainer = document.createElement('div');
    legendItemContainer.className = 'legend-item-container';

    stops.forEach((stopColor, index) => {
        const value = min + (index / (stops.length - 1)) * range;
        const item = document.createElement('div');
        item.className = 'legend-item';

        const colorBox = document.createElement('span');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = stopColor;

        const labelSpan = document.createElement('span');
        labelSpan.className = 'label-text';
        labelSpan.textContent = value.toFixed(2);

        item.appendChild(colorBox);
        item.appendChild(labelSpan);

        legendItemContainer.appendChild(item);
    });

    legendElement.appendChild(legendItemContainer);
}
