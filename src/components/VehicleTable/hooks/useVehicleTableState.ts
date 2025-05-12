import { useMemo } from "react";

export function useVehicleTableState(isLoading: boolean, error: Error | null) {
  const showSkeleton = isLoading;
  const showError = Boolean(error);
  const errorMessage =
    error?.message || "Erro inesperado ao carregar os veículos.";

  return useMemo(
    () => ({
      showSkeleton,
      showError,
      errorMessage,
    }),
    [showSkeleton, showError, errorMessage]
  );
}
