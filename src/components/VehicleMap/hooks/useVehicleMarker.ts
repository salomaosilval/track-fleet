import { useState } from "react";

export function useVehicleMarker() {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const selectMarker = (id: string) => setSelectedMarker(id);
  const clearMarker = () => setSelectedMarker(null);

  return { selectedMarker, selectMarker, clearMarker };
}
