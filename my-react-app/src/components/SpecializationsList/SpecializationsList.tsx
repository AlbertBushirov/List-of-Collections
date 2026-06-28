import type { CollectionSpecialization } from "@/types/collections.js";

import "./Specializations.scss";

type SpecializationsListprops = {
  specializations: CollectionSpecialization[];
};

export function SpecializationsList({
  specializations,
}: SpecializationsListprops) {
  return (
    <ul className="specializations">
      {specializations.map((s) => (
        <li key={s.id}>{s.title}</li>
      ))}
    </ul>
  );
}
