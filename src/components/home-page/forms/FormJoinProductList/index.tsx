import React from 'react';
import './FormJoinProductList.scss';

type FormJoinProductListProps = {
  onJoinProductList: (token: string) => Promise<void>;
  resetStateJoinList: () => void;
};

export default function FormJoinProductList({
  onJoinProductList,
  resetStateJoinList,
}: FormJoinProductListProps) {
  const [tokenInput, setTokenInput] = React.useState('');

  const onChangeToken = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setTokenInput(ev.target.value);

    // Reset state
    resetStateJoinList();
  };

  const handlerFormJoinProductList = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // Joining to some product list
    onJoinProductList(tokenInput);
  };

  return (
    <form
      className="form-join-product-list"
      name="my-form-join-product-list"
      aria-label="Join Product List Form"
      onSubmit={handlerFormJoinProductList}
    >
      <label className="form-join-product-list__label" htmlFor="id-list-token">
        <span className="form-join-product-list__text">
          Join an existing list
        </span>
        <input
          className="form-join-product-list__input"
          type="text"
          id="id-list-token"
          name="token-input"
          value={tokenInput}
          onChange={onChangeToken}
          placeholder="Enter a token"
          data-cy="cy-token-input"
          required
        />
      </label>
      <div className="form-join-product-list__buttons">
        <button
          type="submit"
          className="form-join-product-list__button"
          aria-label="Join product list button"
          data-cy="button-join-shopping-list"
        >
          Join
        </button>
      </div>
    </form>
  );
}
