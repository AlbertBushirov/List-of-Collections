import type { Collection } from "@/types/collections.js";

import { HeaderList } from "@/components/HeaderList/HeaderList.js";
import { SpecializationsList } from "@/components/SpecializationsList/SpecializationsList.js";

type CollectionListProps = {
  collections: Collection[];
};

export function CollectionsList({ collections }: CollectionListProps) {
  return (
    <div>
      <HeaderList title="Коллекции" />
      <ul className="main_list__container">
        {collections.map((c) => (
          <li key={c.id}>
            <span>{c.title}</span>
            <SpecializationsList specializations={c.specializations} />
          </li>
        ))}
      </ul>
    </div>
  );
}
