export interface VehicleLocation {
  id: string;
  plate: string;
  fleet: string | null;
  lat: number;
  lng: number;
  name: string;
  ignition: string;
  createdAt: string;
  equipmentId: string;
}

export interface VehicleMapProps {
  locations: VehicleLocation[];
}
