import { useOutletContext } from "react-router-dom";

import { useCollectionPage } from "@/hooks/useCollectionsPage.js";

import { CollectionsList } from "@/components/CollectionsList/CollectionsList.js";
import { CatalogPagination } from "@/components/CatalogPagination/CatalogPagination.js";
import { Filter } from "@/components/filter/filter.js";
import type { CollectionsOutletContext } from "@/components/CollectionsLayout/CollectionsLayout.js";

import type { PropsCollectionsPage } from "@/types/CollectionsPage.js";

export function CollectionsPage({
  setPageNumber,
  pageNumber,
  values,
  actions,
}: PropsCollectionsPage) {
  const { filterData, baseUrl, currentFilters } =
    useOutletContext<CollectionsOutletContext>();

  const { collectionsData } = useCollectionPage(currentFilters);

  if (!collectionsData?.data) {
    return <div>Загрузка коллекций...</div>;
  }

  return (
    <main>
      <div className="main_list">
        <CollectionsList collections={collectionsData.data} />
        <CatalogPagination
          page={pageNumber}
          total={9}
          onChange={setPageNumber}
        />
      </div>
      <Filter
        basePath={baseUrl}
        values={values}
        actions={actions}
        data={filterData}
        exclude={["rating", "status", "skills", "levels"]}
      />
    </main>
  );
}
