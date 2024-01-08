 function loadFullMapScriptSafari() {
    const BOUNDING_BOX = [
                {
                    latitude: 46.40,
                    longitude: -115.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                },
                {
                    latitude: 46.40,
                    longitude: -82.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                },
                {
                    latitude: 29,
                    longitude: -115.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                },
                {
                    latitude: 29,
                    longitude: -82.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                }
            ];

            const adjustCenter = () => {
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;

                BOUNDING_BOX.forEach((data, index) => {
                    const mapContainer = document.getElementById(`map${index + 1}`);
                    mapContainer.style.width = `${screenWidth / 2}px`;
                    mapContainer.style.height = `${screenHeight / 2}px`;
                    const map = new mapboxgl.Map({
                        container: `map${index + 1}`,
                        style: data.style,
                        minZoom: 3.5,
                        attributionControl: index === 3
                    });


                    map.on('load', () => {
                        let bounds;
                        if (index < 2) {
                            bounds = [
                                [data.longitude - 15.2, data.latitude - 1],
                                [data.longitude + 18, data.latitude + 10]
                            ];
                        } else {
                            bounds = [
                                [data.longitude - 15.2, data.latitude - 7],
                                [data.longitude + 18, data.latitude + 5.5]
                            ];
                        }
                        map.fitBounds(bounds, {padding: 0});

                    });
                    maps.push(map);
                });
            };
            adjustCenter();
            window.addEventListener('resize', adjustCenter);
        }
        function loadFullMapScriptChrome() {
          const BOUNDING_BOX = [
              {
                  latitude: 46.40,
                  longitude: -115.06,
                  zoom: 4.2,
                  style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
              },
              {
                  latitude: 46.40,
                  longitude: -82.06,
                  zoom: 4.2,
                  style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
              },
              {
                  latitude: 29,
                  longitude: -115.06,
                  zoom: 4.2,
                  style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
              },
              {
                  latitude: 29,
                  longitude: -82.06,
                  zoom: 4.2,
                  style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
              }
          ];

          const adjustCenter = () => {
              const screenWidth = window.innerWidth;
              const screenHeight = window.innerHeight;

              BOUNDING_BOX.forEach((data, index) => {
                  const mapContainer = document.getElementById(`map${index + 1}`);
                  mapContainer.style.width = `${screenWidth / 2}px`;
                  mapContainer.style.height = `${screenHeight / 2}px`;
                  const map = new mapboxgl.Map({
                      container: `map${index + 1}`,
                      style: data.style,
                      minZoom: 3.5,
                      attributionControl: index === 3
                  });


                  map.on('load', () => {
                      let bounds;
                      if (index < 2) {
                          bounds = [
                              [data.longitude - 15.2, data.latitude - 1],
                              [data.longitude + 18, data.latitude + 8.5]
                          ];
                      } else {
                          bounds = [
                              [data.longitude - 15.2, data.latitude - 7],
                              [data.longitude + 18, data.latitude + 5.5]
                          ];
                      }
                      map.fitBounds(bounds, {padding: 0});

                  });
                  maps.push(map);
              });
          };
          adjustCenter();
          window.addEventListener('resize', adjustCenter);

}

 function loadFullMapScriptEdge() {
    const BOUNDING_BOX = [
                {
                    latitude: 46.40,
                    longitude: -115.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                },
                {
                    latitude: 46.40,
                    longitude: -82.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                },
                {
                    latitude: 29,
                    longitude: -115.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                },
                {
                    latitude: 29,
                    longitude: -82.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                }
            ];

            const adjustCenter = () => {
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;

                BOUNDING_BOX.forEach((data, index) => {
                    const mapContainer = document.getElementById(`map${index + 1}`);
                    mapContainer.style.width = `${screenWidth / 2}px`;
                    mapContainer.style.height = `${screenHeight / 2}px`;
                    const map = new mapboxgl.Map({
                        container: `map${index + 1}`,
                        style: data.style,
                        minZoom: 3.5,
                        attributionControl: index === 3
                    });


                    map.on('load', () => {
                        let bounds;
                        if (index < 2) {
                            bounds = [
                                [data.longitude - 15.2, data.latitude - 1],
                                [data.longitude + 18, data.latitude + 8.5]
                            ];
                        } else {
                            bounds = [
                                [data.longitude - 15.2, data.latitude - 7],
                                [data.longitude + 18, data.latitude + 5.5]
                            ];
                        }
                        map.fitBounds(bounds, {padding: 0});

                    });
                    maps.push(map);
                });
            };
            adjustCenter();
            window.addEventListener('resize', adjustCenter);
}

 function loadFullMapScriptBrave() {
    const BOUNDING_BOX = [
                {
                    latitude: 46.40,
                    longitude: -115.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                },
                {
                    latitude: 46.40,
                    longitude: -82.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                },
                {
                    latitude: 29,
                    longitude: -115.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                },
                {
                    latitude: 29,
                    longitude: -82.06,
                    zoom: 4.2,
                    style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
                }
            ];

            const adjustCenter = () => {
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;

                BOUNDING_BOX.forEach((data, index) => {
                    const mapContainer = document.getElementById(`map${index + 1}`);
                    mapContainer.style.width = `${screenWidth / 2}px`;
                    mapContainer.style.height = `${screenHeight / 2}px`;
                    const map = new mapboxgl.Map({
                        container: `map${index + 1}`,
                        style: data.style,
                        minZoom: 3.5,
                        attributionControl: index === 3
                    });


                    map.on('load', () => {
                        let bounds;
                        if (index < 2) {
                            bounds = [
                                [data.longitude - 15.2, data.latitude - 1],
                                [data.longitude + 18, data.latitude + 8.5]
                            ];
                        } else {
                            bounds = [
                                [data.longitude - 15.2, data.latitude - 7],
                                [data.longitude + 18, data.latitude + 5.5]
                            ];
                        }
                        map.fitBounds(bounds, {padding: 0});

                    });
                    maps.push(map);
                });
            };
            adjustCenter();
            window.addEventListener('resize', adjustCenter);
}
 function loadFullMapScriptFirefox() {
    const BOUNDING_BOX = [
        {
            latitude: 46.40,
            longitude: -115.06,
            zoom: 4.2,
            style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
        },
        {
            latitude: 46.40,
            longitude: -82.06,
            zoom: 4.2,
            style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
        },
        {
            latitude: 29,
            longitude: -115.06,
            zoom: 4.2,
            style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
        },
        {
            latitude: 29,
            longitude: -82.06,
            zoom: 4.2,
            style: "mapbox://styles/binitagyawali/clivtsgt400nv01qif6ja7r0m"
        }
    ];

    const adjustCenter = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        BOUNDING_BOX.forEach((data, index) => {
            const mapContainer = document.getElementById(`map${index + 1}`);
            mapContainer.style.width = `${screenWidth / 2}px`;
            mapContainer.style.height = `${screenHeight / 2}px`;
            const map = new mapboxgl.Map({
                container: `map${index + 1}`,
                style: data.style,
                minZoom: 3.5,
                attributionControl: index === 3
            });


            map.on('load', () => {
                let bounds;
                if (index < 2) {
                    bounds = [
                        [data.longitude - 15.2, data.latitude - 1],
                        [data.longitude + 18, data.latitude + 8.5]
                    ];
                } else {
                    bounds = [
                        [data.longitude - 15.2, data.latitude - 7],
                        [data.longitude + 18, data.latitude + 5.5]
                    ];
                }
                map.fitBounds(bounds, {padding: 0});

            });
            maps.push(map);
        });
    };
    adjustCenter();
    window.addEventListener('resize', adjustCenter);
}
