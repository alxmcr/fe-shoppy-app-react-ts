import ShopyLogo from '../../../@atoms/logos/ShopyLogo';
import './CardIntro.scss';

export default function CardIntro() {
  return (
    <article className="card-intro">
      <ShopyLogo />
      <h1 className="card-intro__title" data-cy="cy-app-title">
        Shopy
      </h1>
      <p className="card-intro__description" data-cy="cy-app-description">
        {`Let's plan your purchases with our smart shopping list`}
      </p>
    </article>
  );
}
