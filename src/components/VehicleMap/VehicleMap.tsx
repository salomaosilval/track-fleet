import { GoogleMap } from "@react-google-maps/api";
import { useGoogleMap } from "./hooks/useGoogleMap";
import { VehicleMapProps } from "./types/VehicleLocation.types";
import { VehicleMarker } from "./VehicleMarker";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = { lat: -23.55052, lng: -46.633308 };

export const VehicleMap = ({ locations }: VehicleMapProps) => {
  const { isLoaded, loadError } = useGoogleMap();
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  return (
    <div className="w-[90%] mx-auto mt-8 rounded-lg border border-[#2A4156] bg-[var(--color-primary-bg)] p-6">
      <h2 className="text-white text-xl font-bold mb-4">Mapa rastreador</h2>
      {loadError ? (
        <div className="text-red-500">Erro ao carregar o mapa.</div>
      ) : !isLoaded ? (
        <div className="text-white">Carregando mapa...</div>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={
            locations[0]
              ? { lat: locations[0].lat, lng: locations[0].lng }
              : defaultCenter
          }
          zoom={8}
        >
          {locations.map((loc) => {
            const markerId = loc.id + loc.equipmentId;
            return (
              <VehicleMarker
                key={markerId}
                location={loc}
                selected={selectedMarker === markerId}
                onSelect={() => setSelectedMarker(markerId)}
                onClose={() => setSelectedMarker(null)}
              />
            );
          })}
        </GoogleMap>
      )}
    </div>
  );
};
