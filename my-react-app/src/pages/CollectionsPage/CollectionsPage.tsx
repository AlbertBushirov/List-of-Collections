import { useCollectionPage } from "@/hooks/useCollectionsPage.js";

import { CollectionsContainer } from "@/components/CollectionsContainer/CollectionsContainer.js";
import { CatalogPagination } from "@/components/CatalogPagination/CatalogPagination.js";

type propsCollectionsPage = {
  pageNumber: number;
  setPageNumber: (arg: number | string) => void;
};

export function CollectionsPage({
  setPageNumber,
  pageNumber,
}: propsCollectionsPage) {
  const { collectionsData } = useCollectionPage(pageNumber);
  console.log(collectionsData);
  if (!collectionsData?.data) {
    return <div>Загрузка коллекций...</div>;
  }
  return (
    <div className="collections__list">
      <CollectionsContainer collections={collectionsData?.data} />
      <CatalogPagination
        page={pageNumber}
        total={24}
        onChange={setPageNumber}
      />
    </div>
  );
}
