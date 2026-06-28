import { useState, useEffect } from "react";

import BASE_URL from "../api/url.js";
import { getSpecializations } from "@/api/specializationsApi.js";

import type { Specialization, Filters } from "@/types/filters.js";

import { useDeBounce } from "@/hooks/useDebounce.js";

export function useFilters(filters: Filters) {
  const [questions, setQuestions] = useState(null);
  const [specializations, setSpecializations] = useState<
    Specialization[] | null
  >(null);
  const [skills, setSkills] = useState(null);

  const {
    keywords,
    pageNumber,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
  } = filters;

  const debouncedKeywords = useDeBounce(filters.keywords ?? "", 1500);

  useEffect(() => {
    const fetchDataSpecializations = async () => {
      try {
        const data = await getSpecializations();

        setSpecializations(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDataSkills = async () => {
      try {
        const response = await fetch("https://api.yeatwork.ru/skills");
        const json = await response.json();
        setSkills(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataSkills();
    fetchDataSpecializations();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${BASE_URL}questions/public-questions?page=${pageNumber}&limit=10`;

        if (debouncedKeywords?.trim() !== "") {
          const searchParam = encodeURIComponent(debouncedKeywords);
          url += `&keywords=${searchParam}`;
        }

        if (selectedSpec) {
          url += `&specializationSlug=${selectedSpec}`;
        }

        if (selectedSkill) {
          url += `&skillFilterMode[]=${selectedSkill}`;
        }

        if (selectedLevels) {
          url += `&complexity[]=${selectedLevels}`;
        }

        if (selectedRating) {
          url += `&rate[]=${selectedRating}`;
        }

        const response = await fetch(url);
        const json = await response.json();
        setQuestions(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [
    pageNumber,
    debouncedKeywords,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
  ]);
  return { questions, specializations, skills };
}
