import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseDBProductServiceImpl } from '../../../../api/FirebaseProductServiceImpl';
import { KEY_TOKEN, LoadingStates } from '../../../../constants/constants-app';
import { generateToken } from '../../../../helpers/helpers-tcl';
import { TokenContext } from '../../../../providers/TokenProvider/TokenContext';
import './BoxCreateListOfProducts.scss';

export default function BoxCreateListOfProducts() {
  const navigate = useNavigate();
  const { setToken } = React.useContext(TokenContext);
  const [statusCreatingList, setStatusCreationList] = React.useState(
    LoadingStates.IDLE,
  );
  const [errorCreatingList, setErrorCreatingList] =
    React.useState<Error | null>(null);

  const handlerCreateNewList = async () => {
    const service = new FirebaseDBProductServiceImpl();

    try {
      setStatusCreationList(LoadingStates.PENDING);
      const tokenGenerated = generateToken();
      await service.createShoppingList(tokenGenerated);

      // Success
      setStatusCreationList(LoadingStates.SUCCESS);
      localStorage.setItem(KEY_TOKEN, tokenGenerated);

      // Context
      setToken(tokenGenerated);
      // Redirect
      navigate('/list');
    } catch (error) {
      setStatusCreationList(LoadingStates.ERROR);
      console.error(error);

      if (error instanceof Error) {
        setErrorCreatingList(error);
      }
    }
  };

  return (
    <div className="box-create-product-list">
      <button
        className="box-create-product-list__button"
        onClick={handlerCreateNewList}
        data-cy="button-create-new-list"
      >
        Create a new shopping list
      </button>
      {statusCreatingList === LoadingStates.PENDING ? (
        <p className="box-create-product-list__message">Creating list...</p>
      ) : null}
      {statusCreatingList === LoadingStates.ERROR ? (
        <p className="box-create-product-list__message">
          {errorCreatingList?.message}
        </p>
      ) : null}
    </div>
  );
}
