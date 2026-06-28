import { type Dispatch, type SetStateAction } from "react";

export interface Filters {
  keywords: string;
  selectedSpec: string | null;
  pageNumber: number;
  selectedSkill: string | null;
  selectedLevels: string | number | null;
  selectedRating: string | number | null;
}

interface FilterActions {
  setKeywords: Dispatch<SetStateAction<string>>;
  setSelectedSpec: Dispatch<SetStateAction<string | null>>;
  setSelectedSkill: Dispatch<SetStateAction<string | null>>;
  setSelectedLevels: Dispatch<SetStateAction<any>>;
  setSelectedRating: Dispatch<SetStateAction<any>>;
}

export type PropsCollectionsPage = {
  pageNumber: number;
  setPageNumber: (page: number | string) => void;
  values: Filters;
  actions: FilterActions;
};
