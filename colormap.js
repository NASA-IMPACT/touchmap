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


export function renderGradientLegend(legendElement, colormapScale, rescale, min, max) {

    const gradientStops = colormapScale.map(color => color).join(', ');

    // Create container for the gradient and labels
    const legendItemContainer = document.createElement('div');
    legendItemContainer.className = 'legend-item-container';

    // Create gradient box
    const gradientBox = document.createElement('div');
    gradientBox.className = 'color-box';
    gradientBox.style.background = `linear-gradient(to right, ${gradientStops})`;

    // Create labels
    const minLabel = document.createElement('span');
    minLabel.className = 'label-text';
    minLabel.textContent = min;

    const maxLabel = document.createElement('span');
    maxLabel.className = 'label-text';
    maxLabel.textContent = max;

    // Append elements
    legendItemContainer.appendChild(minLabel);
    legendItemContainer.appendChild(gradientBox);
    legendItemContainer.appendChild(maxLabel);

    legendElement.appendChild(legendItemContainer);
}

