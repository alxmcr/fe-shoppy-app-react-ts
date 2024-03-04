import SectionJoinProductList from '../../components/page-home/sections/SectionJoinProductList';
import SectionPresentationApp from '../../components/page-home/sections/SectionPresentationApp';
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
