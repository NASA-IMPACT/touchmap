import { postData } from './utils.js';
import { getAvailableDatesFromDashboard, formatDateToYYYYMMDD } from './dateManagement.js';
import { renderGradientLegend, renderCategoricalLegend} from "./colormap.js";
import { updateMapWithRaster} from "./updateurl.js";

export function createDropdownOptions(mapIndex) {
    const dropdown = document.getElementById(`dropdown${mapIndex}`);
    const layerSelect = dropdown.nextElementSibling.querySelector(`#layers${mapIndex}`);
    const submitButton = dropdown.nextElementSibling.querySelector('.submit');
    const legendElement = document.getElementById(`legend${mapIndex}`);
    const datePicker = dropdown.nextElementSibling.querySelector(`#datePicker${mapIndex}`);
    var selectTimeFrame, isPeriodic, timeDensity, description;

    fetch("https://staging-stac.delta-backend.com/collections")
        .then(response => response.json())
        .then(response => {
            response.collections.forEach(collection => {
                var opt = document.createElement("option");
                opt.value = collection.id;
                opt.label = collection.title;
                console.log(collection.title , "collections");
                layerSelect.appendChild(opt);
                selectTimeFrame = collection.summaries.datetime;
                isPeriodic = collection["dashboard:is_periodic"];
                timeDensity = collection["dashboard:time_density"];
                description = collection.description;

                const availableDates = getAvailableDatesFromDashboard(collection).map(dateString => formatDateToYYYYMMDD(dateString));
                console.log("Available dates for", collection.title, ":", availableDates);

                // Store the date and time range as data attributes on the option element
                opt.setAttribute('data-select-timeframe', JSON.stringify(availableDates));// Store the selectTimeFrame
                opt.setAttribute('data-description', description);
                opt.setAttribute('is-periodic', isPeriodic);
                opt.setAttribute('time-density', timeDensity);

            });
        });

    let available_dates = [];
    layerSelect.addEventListener("change", () => {
        const selectedOption = layerSelect.options[layerSelect.selectedIndex];
        let available_dates_str = selectedOption.getAttribute('data-select-timeframe');
        try {
            available_dates = JSON.parse(available_dates_str); // Update the available_dates array
        } catch (error) {
            console.error("Error parsing available_dates:", error);
            available_dates = [];
        }
        console.log("Updating available_dates:", available_dates);

        // Get the minDate and maxDate
        var maxDateStr = available_dates[available_dates.length - 1];
        var minDateStr = available_dates[0];
        var maxDate = new Date(maxDateStr);
        var minDate = new Date(minDateStr);
        maxDate.setDate(maxDate.getDate() + 1);
        // Initialize the datepicker with minDate and maxDate for this mapIndex
        $(datePicker).datepicker("destroy");
        $(datePicker).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'yy-mm-dd',
            maxDate: maxDate,
            minDate: minDate,
            beforeShowDay: function (date) {
                var formattedDate = $.datepicker.formatDate('yy-mm-dd', date);
                // Check if the formatted date is in the available_dates array
                if ($.inArray(formattedDate, available_dates) != -1) {
                    return [true];
                } else {
                    return [false];
                }
            },
        });
    });

    // Trigger change event to initialize the datepicker when the page loads
    $(layerSelect).trigger("change");
    submitButton.addEventListener('click', async () => {
                console.log(`Submit button clicked for mapIndex: ${mapIndex}`); // log mapIndex when submit button is clicked
                const selected_layer = layerSelect.value;
                const selected_date = datePicker.value;
                const rasterUrl = "https://staging-raster.delta-backend.com/mosaic/register";
                const response1 = await postData(rasterUrl, {
                    collections: [selected_layer],
                    datetime: selected_date
                });
                response1.searchid;
                console.log(response1.searchid, "search_id");

                const jsonUrl = 'output.json';
                const response = await fetch(jsonUrl);
                const jsonData = await response.json();
                console.log(jsonData);

                if (jsonData.hasOwnProperty(selected_layer)) {
                    const selectedCollectionData = jsonData[selected_layer];
                    console.log(selectedCollectionData);

                    // Extract colormapName, rescale, and nodata from selectedCollectionData
                    const colormapName = selectedCollectionData.colormap;
                    const rescale = selectedCollectionData.rescale;
                    const stacCol = selected_layer;
                    const type = selectedCollectionData.type;
                    const min = selectedCollectionData.min;
                    const max = selectedCollectionData.max;
                    const colormapScale = selectedCollectionData.stops;
                    console.log(colormapScale, "type")
                    const name = selectedCollectionData.name;
                    const stops = selectedCollectionData.stops;

                    if (available_dates.includes(selected_date) && selected_layer === stacCol) {
                        const url = `https://staging-raster.delta-backend.com/mosaic/tiles/${response1.searchid}/WebMercatorQuad/{z}/{x}/{y}@1x?assets=cog_default&colormap_name=${colormapName}&rescale=${rescale[0]}%2C${rescale[1]}&nodata=0`;
                        updateMapWithRaster(url, mapIndex);
                        legendElement.innerHTML = '';
                        const stacColParagraph = document.createElement('p');
                        stacColParagraph.className = 'legend-stacCol';
                        stacColParagraph.style.fontWeight= "bold";
                        stacColParagraph.textContent = `${name} - ${selected_date}`;
                        legendElement.appendChild(stacColParagraph);

                        const infoButton = document.createElement('span');
                        infoButton.className = 'info-button';
                        infoButton.textContent = '\u2139';
                        stacColParagraph.appendChild(infoButton);
                        legendElement.style.display = 'block';

                    infoButton.addEventListener('click', () => {
                        const selectedOption = layerSelect.options[layerSelect.selectedIndex];
                        const descriptionElem = legendElement.querySelector('.description');

                        if (descriptionElem) {
                            descriptionElem.remove();
                        } else {
                            const description = selectedOption.getAttribute('data-description');
                            const descriptionParagraph = document.createElement('p');
                            descriptionParagraph.className = 'description';
                            descriptionParagraph.textContent = description;
                            legendElement.appendChild(descriptionParagraph);
                        }
                    });

                        if (type === "categorical") {
                            renderCategoricalLegend(legendElement, stops);
                        } else if (type === "gradient") {
                            renderGradientLegend(legendElement, colormapScale, rescale, min, max);
                        }
                    }
                } else {
                    legendElement.innerHTML = '';
                    const url = `https://staging-raster.delta-backend.com/mosaic/tiles/${response1.searchid}/WebMercatorQuad/{z}/{x}/{y}@1x?assets=cog_default&nodata=0`;
                    updateMapWithRaster(url, mapIndex);
                    legendElement.style.display = 'none';
                }
                hideDropdownContent(mapIndex);
            });
        $(document).ready(function() {
            $(".legend").draggable({
                containment: 'parent',
                scroll: false
            }).resizable({
                containment: 'parent',
                handles: 'se'
            });
        });
}

export function hideDropdownContent(mapIndex) {
        const dropdownContent = document.querySelector(`#dropdown${mapIndex} + .dropdown-content`);
        dropdownContent.style.display = 'none';
    }



