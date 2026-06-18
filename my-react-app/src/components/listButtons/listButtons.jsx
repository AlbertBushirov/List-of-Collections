import { useState } from "react";
import { NavLink } from "react-router-dom";

export function ListButtons({
  name,
  title,
  buttons,
  selected,
  setSelected,
  setTitle,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const allData = Array.isArray(buttons) ? buttons : buttons?.data || [];
  const displayedData = isExpanded ? allData : allData.slice(0, 5);

  return (
    <div>
      <span>{name}</span>
      <ul>
        {title !== "none" &&
          displayedData.map((s) => {
            if (name === "Специализация") {
              const isSpecActive = s.slug === selected;
              return (
                <li key={s.id || s.slug}>
                  <NavLink
                    to={`/questions/${encodeURIComponent(s.slug)}`}
                    className={({ isActive }) =>
                      isActive ? "btn-active" : "btn-default"
                    }
                    onClick={(e) => {
                      if (setTitle) setTitle(s.title);
                    }}
                  >
                    {s.title}
                  </NavLink>
                </li>
              );
            }

            const isActive = s[title] === selected;
            return (
              <li key={s.id || s.title}>
                <button
                  className={isActive ? "btn-active" : "btn-default"}
                  onClick={() => {
                    if (setSelected) setSelected(s[title]);
                  }}
                >
                  {s.title}
                </button>
              </li>
            );
          })}

        {title === "none" &&
          displayedData.map((s, index) => (
            <li key={index}>
              <button className="btn-default">{`#${s}`}</button>
            </li>
          ))}
      </ul>

      {allData.length > 5 && (
        <a
          className="navigation_link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Скрыть" : "Посмотреть все"}
        </a>
      )}
    </div>
  );
}
