import { useState } from "react";

export function useFilterState() {
  const [keywords, setKeywords] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLevels, setSelectedLevels] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  // значения
  const values = {
    keywords,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
    pageNumber,
  };

  // функции
  const actions = {
    setKeywords,
    setSelectedSpec,
    setSelectedSkill,
    setSelectedLevels,
    setSelectedRating,
    setPageNumber,
  };

  return [values, actions] as const;
}
