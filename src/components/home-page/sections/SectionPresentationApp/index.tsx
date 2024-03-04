import BoxCreateListOfProducts from '../../boxes/BoxCreateListOfProducts';
import './SectionPresentationApp.scss';

export default function SectionPresentationApp() {
  return (
    <section className="section-presentation-app">
      <CardIntro />
      <BoxCreateListOfProducts />
    </section>
  );
}
