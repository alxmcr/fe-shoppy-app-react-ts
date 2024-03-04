import { formatDate } from 'date-fns';
import { enUS } from 'date-fns/locale';
import AppHeader from '../../components/header/AppHeader';
import FooterNavigation from '../../components/navigation/FooterNavigation';
import SectionFormAddProduct from '../../components/sections/SectionFormAddProduct';
import { FORMAT_DATES } from '../../constants/constants-dates';
import './AddProductPage.scss';

export default function AddProductPage() {
  const currentTime = new Date();
  const currentTimeStr = formatDate(currentTime, FORMAT_DATES.short, {
    locale: enUS,
  });

  return (
    <div className="add-product-page">
      <AppHeader title={currentTimeStr} subtitle="Add items to your list" />
      <SectionFormAddProduct />
      <FooterNavigation />
    </div>
  );
}
