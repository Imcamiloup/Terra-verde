import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    // Inicializar el mapa después de que los scripts se hayan cargado
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js";
    script.async = true;
    script.onload = () => {
      const map = L.map("map_fc4df3cd8b1d4c8099c03f97de4b9b24", {
        center: [6.2442, -75.5812],
        crs: L.CRS.EPSG3857,
        zoom: 12,
        zoomControl: true,
        preferCanvas: false,
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        detectRetina: false,
        maxNativeZoom: 19,
        maxZoom: 19,
        minZoom: 0,
        noWrap: false,
        opacity: 1,
        subdomains: "abc",
        tms: false,
      }).addTo(map);

      function geoJsonStyler(feature) {
        switch (feature.id) {
          default:
            return {
              color: "black",
              fillColor: "blue",
              fillOpacity: 0.3,
              weight: 2,
            };
        }
      }

      function onEachFeature(feature, layer) {
        layer.on({});
      }

      const geoJsonLayer = L.geoJson(null, {
        onEachFeature: onEachFeature,
        style: geoJsonStyler,
      });

      function addGeoJsonData(data) {
        geoJsonLayer.addData(data);
      }

      geoJsonLayer.bindTooltip(
        function (layer) {
          let div = L.DomUtil.create("div");

          let handleObject = (feature) =>
            typeof feature == "object" ? JSON.stringify(feature) : feature;
          let fields = ["nombre", "Shape_Leng", "Shape_Area"];
          let aliases = ["Comuna: ", "Longitud del perímetro: ", "Área: "];
          let table =
            "<table>" +
            String(
              fields
                .map(
                  (v, i) =>
                    `<tr>
                      <th>${aliases[i].toLocaleString()}</th>
                      <td>${handleObject(
                        layer.feature.properties[v]
                      ).toLocaleString()}</td>
                    </tr>`
                )
                .join("")
            ) +
            "</table>";
          div.innerHTML = table;

          return div;
        },
        { className: "foliumtooltip", sticky: true }
      );

      geoJsonLayer.addTo(map);

      // Agregar los datos GeoJSON
      addGeoJsonData({
        bbox: [
          -75.63241569171144, 6.175718575543212, -75.52489947751069,
          6.3128485265200665,
        ],
        features: [
          {
            bbox: [
              -75.62267343038522, 6.199370428271732, -75.57559943830957,
              6.239649277771207,
            ],
            geometry: {
              
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://code.jquery.com/jquery-3.7.1.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js";
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement("script");
    script4.src =
      "https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js";
    script4.async = true;
    document.body.appendChild(script4);
  }, []);

  return (
    <div>
      <style>{`
        html, body {width: 100%;height: 100%;margin: 0;padding: 0;}
        #map {position:absolute;top:0;bottom:0;right:0;left:0;}
        #map_fc4df3cd8b1d4c8099c03f97de4b9b24 {position: relative; width: 100.0%; height: 100.0%; left: 0.0%; top: 0.0%;}
        .leaflet-container { font-size: 1rem; }
        .foliumtooltip table { margin: auto; }
        .foliumtooltip tr { text-align: left; }
        .foliumtooltip th { padding: 2px; padding-right: 8px; }
      `}</style>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/python-visualization/folium/folium/templates/leaflet.awesome.rotate.min.css"
      />
      <div
        className="folium-map"
        id="map_fc4df3cd8b1d4c8099c03f97de4b9b24"
      ></div>
    </div>
  );
};

export default MapComponent;