import BoxCreateListOfProducts from '../../boxes/BoxCreateListOfProducts';
import CardIntro from '../../cards/CardIntro';
import './SectionPresentationApp.scss';

export default function SectionPresentationApp() {
  return (
    <section className="section-presentation-app">
      <CardIntro />
      <BoxCreateListOfProducts />
    </section>
  );
}
