import "./detailQuestionPage.scss";

import { QuestionNavigation } from "../../components/QuestionNavigation/QuestionNavigation";
import { BackButton } from "../../components/BackButton/BackButton";
import { useQuestionNavigation } from "../../hooks/useQuestionNavigation";

import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { ListButtons } from "../../components/listButtons/listButtons";

export function DetailQuestionPage() {
  const { title } = useParams();
  const navigate = useNavigate();
  const { questions } = useOutletContext();

  const decodedUrlTitle = decodeURIComponent(title || "").trim();

  const currentIndex = questions?.data
    ? questions.data.findIndex((q) => String(q.slug).trim() === decodedUrlTitle)
    : -1;

  const { handlePrev, handleNext, hasPrev, hasNext } = useQuestionNavigation(
    questions?.data || [],
    currentIndex,
  );

  if (!questions || !questions.data) {
    return <div>Загрузка данных...</div>;
  }

  if (currentIndex === -1) {
    return <div>Вопрос не найден</div>;
  }

  const question = questions.data[currentIndex];

  const close = () => {
    const specSlug = question.questionSpecializations?.[0]?.slug || "";
    navigate(`/questions/${specSlug}`);
  };

  return (
    <main>
      <BackButton onClick={close} style={{ cursor: "pointer" }} />
      <div className="detail_question">
        <div className="detail_question__title_conteiner">
          <h1>{question.title}</h1>
          <p>{question.description}</p>
        </div>

        <QuestionNavigation
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />

        <article>
          <h2>Краткий ответ</h2>
          <div
            className="server-html-content"
            dangerouslySetInnerHTML={{ __html: question.shortAnswer || "" }}
          />
        </article>
        <article>
          <h2>Развёрнутый ответ</h2>
          <div
            className="server-html-content"
            dangerouslySetInnerHTML={{ __html: question.longAnswer || "" }}
          />
        </article>
      </div>
      <aside className="filter">
        <span>Уровень</span>
        <ul className="description__params">
          <span>Рейтинг: {question.rate}</span>
          <span>Сложность: {question.complexity}</span>
        </ul>

        <ListButtons
          name="Навыки:"
          title="title"
          buttons={question.questionSkills}
        />
        <ListButtons
          name="Ключевые слова:"
          title="none"
          buttons={question.keywords}
        />
      </aside>
    </main>
  );
}
