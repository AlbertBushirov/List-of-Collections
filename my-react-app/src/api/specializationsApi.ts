import BASE_URL from "@/api/url.js";

import type { Specialization } from "@/types/filters.js";

export const getSpecializations = async (): Promise<Specialization[]> => {
  const response = await fetch(`${BASE_URL}specializations`);

  if (!response.ok) {
    throw new Error(
      `Ошибка ${response.status}: не удалось загрузить специализации`,
    );
  }

  return response.json();
};
