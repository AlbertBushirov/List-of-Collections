import { useState, useEffect } from "react";

import { useFilterState } from "@/hooks/useFilterState.js";

import { getPublicCollections } from "@/api/collectionsApi.js";

import type { CollectionsResponse } from "@/types/collections.js";

export const useCollectionPage = (pageNumber: number) => {
  const [collectionsData, setCollectionsData] =
    useState<CollectionsResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPublicCollections({
          pageNumber: pageNumber,
        });
        setCollectionsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [pageNumber]);

  return { collectionsData };
};
