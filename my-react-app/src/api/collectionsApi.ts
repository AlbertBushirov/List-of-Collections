import BASE_URL from "@/api/url.js";

import { useFilterState } from "@/hooks/useFilterState.js";

import type {
  CollectionFilters,
  CollectionsResponse,
} from "@/types/collections.js";

type PropsCollections = {
  pageNumber: number;
};

export const getPublicCollections = async ({
  pageNumber,
}: PropsCollections): Promise<CollectionsResponse> => {
  const response = await fetch(
    `${BASE_URL}collections/public?page=${pageNumber}&limit=10`,
  );

  if (!response.ok) {
    throw new Error(
      `Ошибка ${response.status}: не удалось загрузить коллекции`,
    );
  }

  return response.json();
};
