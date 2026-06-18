export function QuestionNavigation({ onNext, onPrev, hasNext, hasPrev }) {
  return (
    <div className="detail_question__navigation">
      <button onClick={onPrev} disabled={!hasPrev} className="navigation-btn">
        Предыдущий
      </button>
      <button onClick={onNext} disabled={!hasNext} className="navigation-btn">
        Следующий
      </button>
    </div>
  );
}
