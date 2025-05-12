import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { COLUMNS } from "./constants";
import { VehicleTableProps } from "./types";
import { Vehicle } from "@/api/vehicles/types";

const VehicleTable = ({ vehicles }: VehicleTableProps) => {
  return (
    <div className="w-[90%] mx-auto overflow-x-auto rounded-lg border border-[#001E2E] bg-[var(--color-primary-bg)] mt-8">
      <Table>
        <TableHeader>
          <TableRow>
            {COLUMNS.map((col) => (
              <TableHead
                key={col.key}
                className="text-white text-base font-semibold bg-[var(--color-primary-bg)] py-4"
              >
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow
              key={vehicle.id}
              className="hover:bg-[var(--color-secondary-bg)] transition-colors h-14"
            >
              {COLUMNS.map((col) => (
                <TableCell
                  key={col.key}
                  className="text-white py-4 font-medium"
                >
                  {col.render
                    ? col.render(vehicle[col.key as keyof Vehicle] as string)
                    : vehicle[col.key as keyof Vehicle] ?? "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VehicleTable;
