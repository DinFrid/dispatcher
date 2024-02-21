import { FilterType } from "../Enums";

export const FILTER_DEPENDENCIES: Record<string, string[]> = {
    [FilterType.Sources]: [FilterType.Country, FilterType.Category],
    [FilterType.Country]: [FilterType.Sources],
    [FilterType.Category]: [FilterType.Sources],
  };
  