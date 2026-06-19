import { CatalogPagination } from "../../components/CatalogPagination/pagination";
import { QuestionsList } from "../../components/questionsList/questionsList";
import { Filter } from "../../components/filter/filter";
import { useOutletContext, useParams } from "react-router-dom";

export function QuestionsPage({
  pageNumber,
  setPageNumber,
  values,
  actions,
  title,
  setTitle,
}) {
  const { spec } = useParams();

  const { questions, specializations, skills } = useOutletContext();

  return (
    <>
      <main>
        <div className="question_list">
          <h1>{`Вопросы ${title}`}</h1>
          <hr />
          <QuestionsList spec={spec} questions={questions} />
          <CatalogPagination
            page={pageNumber}
            total={24}
            onChange={setPageNumber}
          />
        </div>
        <Filter
          values={values}
          actions={actions}
          data={{ specializations, skills }}
          setTitle={setTitle}
        ></Filter>
      </main>
    </>
  );
}
