import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

function App() {

  const position = [
    [40.7128, -74.0060],
    [51.5074, -0.1278],
    [25.2048, 55.2708],
    [28.6139, 77.2090],
    [35.6895, 139.6917],
    [-33.8688, 151.2093],
    [-33.9249, 18.4241]
  ];

  const initial = [27.4955539, 77.6855554];

  return (
    <div className="App">
      <MapContainer
        center={initial}
        zoom={1}
        scrollWheelZoom={false}
        style={{ height: '600px', width: '1000px' }}
      >
        {/* The TileLayer is what loads the actual map images (tiles) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* A simple marker at the center position */}
        {position.map((position, index) => {
          return (
            <Marker key={index} position={position}>
              <Popup>
                This is location number **{index + 1}** at: <br /> **Lat: {position[0]}, Lng: {position[1]}**
              </Popup>
            </Marker>
          );
        })}

      </MapContainer>
      <h1>Leaflet Map with React</h1>
    </div>
  );
}

export default App;
