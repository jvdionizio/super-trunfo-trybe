import React from 'react';
import deckArr from '../data/deckArr';
import Card from './Card';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.exclude = this.exclude.bind(this);
  }

  exclude({ target }) {
    target.parentElement.remove();
  }

  render() {
    return (
      <div className="deck">
        <h2> Seu Baralho </h2>
        {
          deckArr
            .map((cardObj) => (<Card
              key={ cardObj.name }
              cardName={ cardObj.name }
              cardDescription={ cardObj.description }
              cardAttr1={ cardObj.attr1 }
              cardAttr2={ cardObj.attr2 }
              cardAttr3={ cardObj.attr3 }
              cardImage={ cardObj.image }
              cardRare={ cardObj.rare }
              cardTrunfo={ cardObj.trunfo }
              excludeBtn={ this.exclude }
            />))
        }
      </div>
    );
  }
}

export default Deck;
