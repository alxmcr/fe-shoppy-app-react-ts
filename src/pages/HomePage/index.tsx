import SectionJoinProductList from '../../components/home-page/sections/SectionJoinProductList';
import SectionPresentationApp from '../../components/home-page/sections/SectionPresentationApp';
import './HomePage.scss';

export default function HomePage() {
  return (
    <div className="home-page">
      <SectionPresentationApp />
      <hr />
      <SectionJoinProductList />
    </div>
  );
}
