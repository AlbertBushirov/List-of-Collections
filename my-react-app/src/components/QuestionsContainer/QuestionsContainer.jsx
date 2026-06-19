import { useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";

import { useFilterState } from "../../hooks/useFilterState";
import { useFetchData } from "../../hooks/useFetchData";

import { QuestionsPage } from "../../pages/QuestionsPage/questionsPage";
import { DetailQuestionPage } from "../../pages/DetailQuestionPage/detailQuestionPage";

export function QuestionsContainer({ filterValues, filterActions }) {
  const params = useParams();
  const urlSpec = params["*"] || "";

  useEffect(() => {
    if (urlSpec !== filterValues.selectedSpec) {
      filterActions.setSelectedSpec(urlSpec);
    }
  }, [urlSpec, filterValues.selectedSpec, filterActions]);

  const currentFilters = {
    ...filterValues,
    spec: urlSpec || filterValues.selectedSpec,
  };

  const { questions, specializations, skills } = useFetchData(currentFilters);

  return <Outlet context={{ questions, specializations, skills }} />;
}
