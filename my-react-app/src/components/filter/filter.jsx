import { ListButtons } from "../listButtons/listButtons";
import "./filter.scss";

export function Filter({ values, actions, data, setTitle }) {
  const {
    keywords,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
  } = values;
  const {
    setKeywords,
    setSelectedSpec,
    setSelectedSkill,
    setSelectedLevels,
    setSelectedRating,
  } = actions;
  const { specializations, skills } = data;

  const levelsConfig = {
    data: [
      { id: 1, title: "1-3" },
      { id: 4, title: "4-6" },
      { id: 7, title: "7-8" },
      { id: 9, title: "9-10" },
    ],
  };

  const ratingConfig = {
    data: [
      { title: 1 },
      { title: 2 },
      { title: 3 },
      { title: 4 },
      { title: 5 },
    ],
  };

  const statusConfig = {
    data: [{ title: "Изученные" }, { title: "Не изученные" }, { title: "Все" }],
  };

  return (
    <aside className="filter">
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Введите вопрос..."
        value={keywords}
        onChange={(e) => {
          setKeywords(e.target.value);
        }}
      />
      <ListButtons
        name="Специализация"
        title="slug"
        buttons={specializations}
        selected={selectedSpec}
        setSelected={setSelectedSpec}
        setTitle={setTitle}
      />
      <ListButtons
        name="Навыки"
        title="title"
        buttons={skills}
        selected={selectedSkill}
        setSelected={setSelectedSkill}
      />
      <ListButtons
        name="Уровень сложности"
        title="id"
        buttons={levelsConfig}
        selected={selectedLevels}
        setSelected={setSelectedLevels}
      />
      <ListButtons
        name="Рейтинг"
        title="title"
        buttons={ratingConfig}
        selected={selectedRating}
        setSelected={setSelectedRating}
      />
      <ListButtons name="Статус" title="title" buttons={statusConfig} />
    </aside>
  );
}
