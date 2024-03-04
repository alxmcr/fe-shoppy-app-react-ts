import ShopyLogo from '../../../@atoms/logos/ShopyLogo';
import './CardIntro.scss';

export default function CardIntro() {
  return (
    <article className="card-intro">
      <ShopyLogo />
      <h1 className="card-intro__title" data-cy="app-title">
        Shopy
      </h1>
      <p className="card-intro__description">
        {`Let's plan your purchases with our smart shopping list`}
      </p>
    </article>
  );
}
