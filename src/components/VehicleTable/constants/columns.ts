import { vehicleStatusMapper, vehicleTypeMapper } from "../mappers";
import { Column } from "../types";

export const COLUMNS: Column[] = [
  {
    key: "plate",
    label: "Placa",
  },
  {
    key: "fleet",
    label: "Frota",
  },
  {
    key: "type",
    label: "Tipo",
    render: (value: string) => vehicleTypeMapper[value] || value,
  },
  {
    key: "model",
    label: "Modelo",
  },
  {
    key: "status",
    label: "Status",
    render: (value: string) => vehicleStatusMapper[value] || value,
  },
];
