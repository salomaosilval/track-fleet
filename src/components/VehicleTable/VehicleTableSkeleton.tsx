import { VehicleTableSkeletonProps } from "./types";

const VehicleTableSkeleton = ({
  columns,
  rows = 20,
}: VehicleTableSkeletonProps) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <tr key={rowIdx} className="animate-pulse">
          {Array.from({ length: columns }).map((_, colIdx) => (
            <td key={colIdx} className="py-4 px-2">
              <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default VehicleTableSkeleton;
