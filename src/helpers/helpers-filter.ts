import { Product } from '../@types/appTypes';
import { ProductFilterConditions } from '../providers/ProductFilterConditionsProvider/ProductFilterConditionsContext';
import { getStatusProduct } from './helpers-products';

export const onFilterProductsByConditions = (
  product: Product,
  filterConditions: ProductFilterConditions,
) => {
  if (product !== null && filterConditions !== null) {
    const { name } = product;
    const status = getStatusProduct(product);

    const { filterProductName, filterProductFreqTime } = filterConditions;

    // By name
    const filterByName = name
      .toLowerCase()
      .trim()
      .includes(filterProductName.toLowerCase().trim());

    // By freq time
    let filterByFreqTime = false;
    if (filterProductFreqTime !== null) {
      const statusCode = status.code.toLowerCase().trim();
      const filterStatusCode = filterProductFreqTime?.code
        ?.toLowerCase()
        .trim();

      filterByFreqTime = statusCode === filterStatusCode;
    }

    if (name !== '' && filterProductFreqTime !== null) {
      return filterByName && filterByFreqTime;
    } else if (name !== '') {
      return filterByName;
    } else if (filterProductFreqTime !== null) {
      return filterByFreqTime;
    }
  }

  return true;
};
