import type { Collection } from "@/types/collections.js";

type CollectionListProps = {
  collections: Collection[];
};

export function CollectionsContainer({ collections }: CollectionListProps) {
  return (
    <div>
      <h1>Коллекции</h1>
      <ul>
        {collections.map((c) => (
          <li key={c.id}>
            <span>{c.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
