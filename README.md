React + Vite + Leaflet Map Project

This guide explains how to create a simple project using React + Vite + JavaScript and display a map using the Leaflet library.

📌 Prerequisites

Before starting, make sure you have:

Node.js installed

npm or yarn package manager

🚀 1. Create a React + Vite Project

Run the following command:

npm create vite@latest my-map-app --template react

OR

yarn create vite my-map-app --template react

Move into the project:

cd my-map-app

Install dependencies:

npm install

🗺️ 2. Install Leaflet and React-Leaflet

Install required packages:

npm install leaflet react-leaflet

Also install Leaflet CSS:

npm install leaflet/dist/leaflet.css

📁 3. Setup Leaflet Map Component

Create a file:

src/MapView.jsx

Add this code:

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapView() {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap Contributors"
      />

      <Marker position={[20.5937, 78.9629]} icon={markerIcon}>
        <Popup>India Center Point</Popup>
      </Marker>
    </MapContainer>
  );
}

📌 4. Use Map Component in App.jsx

Replace the content of App.jsx with:

import MapView from "./MapView";

function App() {
  return <MapView />;
}

export default App;

▶️ 5. Run the Project

Start the development server:

npm run dev

Open the URL shown in terminal (usually http://localhost:5173).

🎉 Done!

You now have a React + Vite + Leaflet project running with a fully functional map.

Feel free to customize markers, events, layers, or add user geolocation support.

📄 License

This project is free to use for learning or personal development.