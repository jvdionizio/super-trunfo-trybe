import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: 'Nome da carta',
      description: 'Descrição da carta',
      attr1: '00',
      attr2: '00',
      attr3: '00',
      image: 'url-to-image',
      rare: 'raro',
      trunfo: false,
      btnDisable: true,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      btnDisable } = this.state;
    return (
      <div>
        <div className="makingCard">
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
            // hasTrunfo= false
            isSaveButtonDisabled={ btnDisable }
            onInputChange={ this.handleChange }
          />
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
            // hasTrunfo= false
            isSaveButtonDisabled={ btnDisable }
          />
        </div>
      </div>
    );
  }
}

export default App;
