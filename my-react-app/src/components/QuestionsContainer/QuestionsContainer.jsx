import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";

import { useFilterState } from "../../hooks/useFilterState";
import { useFetchData } from "../../hooks/useFetchData";

import { QuestionsPage } from "../../pages/questionsPage/questionsPage";
import { DetailQuestionPage } from "../../pages/DetailQuestionPage/detailQuestionPage";

export function QuestionsContainer({ filterValues, filterActions }) {
  const { spec: urlSpec } = useParams();

  useEffect(() => {
    const nextSpec = urlSpec || "";
    if (nextSpec !== filterValues.selectedSpec) {
      filterActions.setSelectedSpec(nextSpec);
    }
  }, [urlSpec, filterValues.selectedSpec, filterActions]);

  const currentFilters = {
    ...filterValues,
    spec: urlSpec || filterValues.selectedSpec,
  };

  // Загружаем данные один раз здесь
  const { questions, specializations, skills } = useFetchData(currentFilters);

  // Передаем загруженные данные вниз через React Router Context
  return <Outlet context={{ questions, specializations, skills }} />;
}
