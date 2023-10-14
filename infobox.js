let infoButtonClickListener;
let documentClickListener;

export function setupTooltip(infoButton, layerSelect, mapIndex) {
    const tooltip = document.getElementById(`infoTooltip${mapIndex}`);
    const tooltipContent = document.getElementById(`tooltipContent${mapIndex}`);
    let tooltipVisible = false;

    if (infoButtonClickListener) {
        infoButton.removeEventListener('click', infoButtonClickListener);
    }

    infoButtonClickListener = function(event) {
        const selectedOption = layerSelect.options[layerSelect.selectedIndex];
        const descriptionText = selectedOption.getAttribute('data-description');
        console.log(descriptionText, "description");

        tooltipContent.textContent = descriptionText;

        const mapContainer = infoButton.closest('.map-container');
        const legend = mapContainer.querySelector('.legend');
        const legendRect = legend.getBoundingClientRect();

        if (tooltipVisible) {
            tooltip.style.display = 'none';
        } else {
            tooltip.style.display = 'block';
            tooltip.style.top = (legendRect.bottom + 10) + 'px';
        }

        tooltipVisible = !tooltipVisible;
    };

    infoButton.addEventListener('click', infoButtonClickListener);

    if (documentClickListener) {
        document.removeEventListener('click', documentClickListener);
    }

    documentClickListener = function(event) {
        if (event.target !== infoButton && !tooltip.contains(event.target)) {
            tooltip.style.display = 'none';
            tooltipVisible = false;
        }
    };

    document.addEventListener('click', documentClickListener);
}



