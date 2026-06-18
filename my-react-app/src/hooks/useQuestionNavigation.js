import { useNavigate } from "react-router-dom";

export function useQuestionNavigation(questionsData, currentIndex) {
  const navigate = useNavigate();

  const prevQuestion = questionsData?.[currentIndex - 1];
  const nextQuestion = questionsData?.[currentIndex + 1];

  const handlePrev = () => {
    if (prevQuestion) {
      const specSlug = prevQuestion.questionSpecializations?.[0]?.slug || "";
      navigate(
        `/questions/${specSlug}/${encodeURIComponent(prevQuestion.slug)}`,
      );
    }
  };

  const handleNext = () => {
    if (nextQuestion) {
      const specSlug = nextQuestion.questionSpecializations?.[0]?.slug || "";
      navigate(
        `/questions/${specSlug}/${encodeURIComponent(nextQuestion.slug)}`,
      );
    }
  };

  return {
    handlePrev,
    handleNext,
    hasPrev: Boolean(prevQuestion),
    hasNext: Boolean(nextQuestion),
  };
}
