import BoxProductFilterTags from '../../boxes/BoxProductFilterTags';
import BoxProductList from '../../boxes/BoxProductList';
import WrapperModalProductFilter from '../../modals/WrapperModalProductFilter';
import './SectionProductList.scss';

export default function SectionProductList() {
  return (
    <section className="section-product-list">
      <BoxProductFilterTags />
      <BoxProductList />
      <WrapperModalProductFilter />
    </section>
  );
}
