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
import { useVehicleTableState } from "./hooks/useVehicleTableState";
import VehicleTableSkeleton from "./VehicleTableSkeleton";

const VehicleTable = ({ vehicles, isLoading, error }: VehicleTableProps) => {
  const { showSkeleton, showError, errorMessage } = useVehicleTableState(
    !!isLoading,
    error ?? null
  );

  return (
    <div className="w-[90%] mx-auto overflow-x-auto rounded-lg border border-[#2A4156] bg-[var(--color-primary-bg)] mt-8">
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
          {showSkeleton && <VehicleTableSkeleton columns={COLUMNS.length} />}
          {showError && !showSkeleton && (
            <TableRow>
              <TableCell
                colSpan={COLUMNS.length}
                className="text-center text-red-400 py-8"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">🚧</span>
                  <span className="font-semibold">{errorMessage}</span>
                  <span className="text-xs text-slate-400">
                    Tente recarregar a página ou contate o suporte.
                  </span>
                </div>
              </TableCell>
            </TableRow>
          )}
          {!showSkeleton &&
            !showError &&
            vehicles.map((vehicle) => (
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
