import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="viewCard">
        <h2>Pré-visualização</h2>
        <div className="card">
          <h3 data-testid="name-card">{cardName}</h3>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{cardDescription}</p>
          <div className="atributes">
            <div className="atribute">
              <p>Atrr1</p>
              {' '}
              <p data-testid="attr1-card">{cardAttr1}</p>
            </div>
            <div className="atribute">
              <p>Atrr2</p>
              {' '}
              <p data-testid="attr2-card">{cardAttr2}</p>
            </div>
            <div className="atribute">
              <p>Atrr3</p>
              {' '}
              <p data-testid="attr3-card">{cardAttr3}</p>
            </div>
          </div>
          <div className="rare" data-testid="rare-card">{cardRare}</div>
          {cardTrunfo && (
            <div
              data-testid="trunfo-card"
              className="super-trunfo"
            >
              Super Trunfo
            </div>)}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
