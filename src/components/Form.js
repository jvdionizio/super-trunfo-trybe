import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAtrr1,
      cardAtrr2,
      cardAtrr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonclick,
    } = this.props;
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form>
          <label htmlFor="name">
            Nome
            <input
              name="name"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              name="description"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atrr1">
            Atributo 1
            <input
              name="attr1"
              type="Number"
              data-testid="attr1-input"
              value={ cardAtrr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atrr2">
            Atributo 2
            <input
              name="attr2"
              type="Number"
              data-testid="attr2-input"
              value={ cardAtrr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atrr3">
            Atributo 3
            <input
              name="attr3"
              type="Number"
              data-testid="attr3-input"
              value={ cardAtrr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              name="image"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select
              name="rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            <input
              name="trunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonclick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAtrr1: PropTypes.string.isRequired,
  cardAtrr2: PropTypes.string.isRequired,
  cardAtrr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonclick: PropTypes.func.isRequired,
};

export default Form;
