import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FirebaseDBProductServiceImpl } from '../../../../api/FirebaseProductServiceImpl';
import { KEY_TOKEN, LoadingStates } from '../../../../constants/constants-app';
import { TokenContext } from '../../../../providers/TokenProvider/TokenContext';
import FormJoinProductList from '../../forms/FormJoinProductList';
import './BoxFormJoinProductList.scss';

export default function BoxFormJoinProductList() {
  const navigate = useNavigate();
  const { setToken } = React.useContext(TokenContext);
  const [statusJoiningList, setStatusJoiningList] = React.useState(
    LoadingStates.IDLE,
  );
  const [errorJoiningList, setErrorJoiningList] = React.useState<Error | null>(
    null,
  );

  const resetStateJoinList = () => {
    setStatusJoiningList(LoadingStates.IDLE);
    setErrorJoiningList(null);
  };

  const onJoinProductList = async (tokenToCheck = '') => {
    try {
      setStatusJoiningList(LoadingStates.PENDING);
      const service = new FirebaseDBProductServiceImpl();
      const existsToken = await service.isTokenValidToJoinList(tokenToCheck);

      if (existsToken) {
        // Localstorage
        localStorage.setItem(KEY_TOKEN, tokenToCheck);
        // Token Context
        setToken(tokenToCheck);
        // States
        setStatusJoiningList(LoadingStates.SUCCESS);
        // Toast
        toast.success('Token valid!');
        // Redirect
        navigate('/list');
      } else {
        // Localstorage
        localStorage.removeItem(KEY_TOKEN);

        // Error
        const errorMsg = 'Joining List. Token invalid!';
        setStatusJoiningList(LoadingStates.ERROR);
        setErrorJoiningList(new Error(errorMsg));
        // Toast
        toast.error(errorMsg);
      }
    } catch (error) {
      setStatusJoiningList(LoadingStates.ERROR);

      if (error instanceof Error) {
        setErrorJoiningList(error);
      }
    }
  };

  return (
    <article className="box-form-join-product-list">
      <FormJoinProductList
        onJoinProductList={onJoinProductList}
        resetStateJoinList={resetStateJoinList}
      />
      {/* MESSAGES */}
      <footer className="box-form-join-product-list__messages">
        {LoadingStates.PENDING === statusJoiningList ? (
          <p className="box-form-join-product-list__message box-form-join-product-list__message--info">
            Joining to your shopping list...
          </p>
        ) : null}
        {LoadingStates.ERROR === statusJoiningList &&
        errorJoiningList !== null ? (
          <p className="box-form-join-product-list__message box-form-join-product-list__message--error">
            {errorJoiningList?.message}
          </p>
        ) : null}
      </footer>
    </article>
  );
}
