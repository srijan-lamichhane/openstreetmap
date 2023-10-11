import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {

  const markers = [
    {
      geocode: [27.6993752,85.3296294],
      popUp: "Hello, This is matidevi, kathmandu"
    },
    {
      geocode: [27.6726691,85.3164696],
      popUp: "Hello, this is patan, lalitpur"
    },
    {
      geocode: [27.6951561,85.309462],
      popUp: "Hello, this is Tripureshowr"
    }
  ];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/9131/9131546.png",
    // iconUrl: require("./img/marker.png"),
    iconSize: [38, 38]
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html:`<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: point(33,33,true),
      className: "custom-marker-cluster",
    });
  };
cl

  return (
    <MapContainer center={[27.6906912,85.3174936]} zoom={14} minZoom={2.78}>

      <TileLayer
        attribution='&copy; <a href="https://nowcoast.noaa.gov/">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {/* <TileLayer
        attribution='EsriWorldImagery'
        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png'
        maxZoom={19}
        minZoom={0}      
      /> */}



      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >

        {
          markers.map(marker => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>
                {marker.popUp}
              </Popup>
            </Marker>
          ))
        }

      </MarkerClusterGroup>

    </MapContainer>
  );
}

export default App;
