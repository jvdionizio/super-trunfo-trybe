import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      name: 'Nome da carta',
      description: 'Descrição da carta',
      attr1: '0',
      attr2: '0',
      attr3: '0',
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
    }, this.validate);
  }

  validate() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      // trunfo,
      // btnDisable
    } = this.state;
    const fields = [name, description, image, rare];
    const notEmptyFields = fields.every((field) => field !== '');
    const value1 = parseInt(attr1, 10);
    const value2 = parseInt(attr2, 10);
    const value3 = parseInt(attr3, 10);
    const maxValue = 90;
    const maxSum = 210;
    const atributes = [value1, value2, value3];
    const areAtributesValid = atributes
      .every((atribute) => atribute <= maxValue && atribute >= 0);
    const validAtributesSum = (value1 + value2 + value3) <= maxSum;
    const validForm = notEmptyFields && areAtributesValid && validAtributesSum;
    this.setState({
      btnDisable: !validForm,
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
