import { Vehicle } from "@/api/vehicles/types";

export interface Column {
  key: string;
  label: string;
  render?: (value: string) => string;
}

export interface VehicleTableProps {
  vehicles: Vehicle[];
}
