import BASE_URL from "@/api/url.js";

import type { CollectionsResponse } from "@/types/collections.js";

interface PropsCollections {
  pageNumber: number;
  keywords?: string;
  selectedSpec?: string | null;
  selectedSkill?: string | null;
  selectedLevels?: string | number | null;
  selectedRating?: string | number | null;
}

export const getPublicCollections = async (
  params: PropsCollections,
): Promise<CollectionsResponse> => {
  const {
    pageNumber,
    keywords,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
  } = params;

  let url = `${BASE_URL}collections/public?page=${pageNumber}&limit=10`;

  if (keywords?.trim()) {
    url += `&keywords=${encodeURIComponent(keywords)}`;
  }
  if (selectedSpec) {
    url += `&specializationSlug=${selectedSpec}`;
  }
  if (selectedSkill) {
    url += `&skillFilterMode[]=${selectedSkill}`;
  }
  if (selectedLevels) {
    url += `&complexity[]=${selectedLevels}`;
  }
  if (selectedRating) {
    url += `&rate[]=${selectedRating}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Ошибка ${response.status}: не удалось загрузить коллекции`,
    );
  }

  return response.json();
};
