import { Component } from 'react';
import { Form } from 'components/ContactForm/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
      </div>
    );
  }
}
