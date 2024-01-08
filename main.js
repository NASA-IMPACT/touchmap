import { createDropdownOptions } from './dropdown.js';

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown, index) => {
    const mapIndex = index + 1;
    console.log("Setting up dropdown for map:", mapIndex);
    const dropdownBtn = dropdown.querySelector('button');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownBtn.addEventListener('click', () => {
        console.log("Clicked dropdown for map:", mapIndex);
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
    createDropdownOptions(mapIndex);
    console.log(mapIndex, "MapIndex")
    maps.forEach(map => {
        map.on('click', () => {
            console.log("Clicked on map:", mapIndex);
            dropdownContent.style.display = 'none';
        });
    });
});

    maps.forEach(map => {
        map.on('resize', () => {
            map.resize();
        });
    });
// Function to remove all the maps and clean the legends.
function removeMapsAndCleanLegends() {
    maps.forEach(map => map.remove());
    maps = [];

    // Clean all legends.
    for (let i = 1; i <= 4; i++) {
        const legendElement = document.getElementById(`legend${i}`);
        if (legendElement) {
            legendElement.innerHTML = '';
            legendElement.style.display = 'none';
        }
    }
}

    let currentView = 'fullMaps';
    document.getElementById('fullMapBtn').addEventListener('click', function () {
        removeMapsAndCleanLegends();
        loadFullMapScript()
        currentView = 'fullMap'; // update current view
    });

    document.getElementById('fourMapsBtn').addEventListener('click', function () {
        removeMapsAndCleanLegends();
        loadFourMapsScript();
        currentView = 'fourMaps'; // update current view
    });

    document.getElementById('reset').addEventListener('click', function () {
        alert("Please note that, if you reset the map then other users might be affected");
        if (currentView === 'fullMap') {
            removeMapsAndCleanLegends();
            loadFullMapScript()

        } else if (currentView === 'fourMaps') {
            removeMapsAndCleanLegends();
            loadFourMapsScript();
        }
    });
loadFullMapScript();

