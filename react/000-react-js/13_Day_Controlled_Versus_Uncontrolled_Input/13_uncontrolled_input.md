[<< Day 12](../12_Day_Forms/12_forms.md) | [Day 14 >>](../14_Day_Component_Life_Cycles/14_component_life_cycles.md)

- [Uncotrolled Components](#uncotrolled-components)
  - [Getting data from an uncontrolled input](#getting-data-from-an-uncontrolled-input)
  - [Getting multiple input data from form](#getting-multiple-input-data-from-form)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)

# Uncontrolled Components

In the previous day challenge we have covered controlled inputs. In react most of the time we use controlled inputs as recommended on the official [documentation of React](https://reactjs.org/docs/uncontrolled-components.html).

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM. In uncontrolled input we get data from input fields like traditional HTML form data handling.

An example of uncontrolled component

## Getting data from an uncontrolled input

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  firstName = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.firstName.current.value);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            ref={this.firstName}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Getting multiple input data from form

We can grab multiple input data from DOM. We are not directly targeting the DOM but React is getting data from DOM using ref.

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  firstName = React.createRef();
  lastName = React.createRef();
  country = React.createRef();
  title = React.createRef();

  handleSubmit = (e) => {
    // stops the default behavior of form element specifically refreshing of page
    e.preventDefault();

    console.log(this.firstName.current.value);
    console.log(this.lastName.current.value);
    console.log(this.title.current.value);
    console.log(this.country.current.value);

    const data = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      title: this.title.current.value,
      country: this.country.current.value,
    };
    // the is the place we connect backend api to send the data to the database
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              ref={this.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              ref={this.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              ref={this.country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              ref={this.title}
              onChange={this.handleChange}
            />
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Most of the time we use controlled input instead of uncontrolled input. In case if you want to target some element on the DOM you will use ref to get the content of that element. Don't touch directly using pure JavaScript. When you develop a React application do not touch the DOM directly because React has its own way of handling the DOM manipulation.

# Exercises

## Exercises: Level 1

1. What is a controlled input?

> A controlled component is a component that renders form elements and controls them by keeping the form data in the component’s state. The alternative is an uncontrolled component, where form data is handled by the DOM itself.

2. What is an uncontrolled input

> An uncontrolled component is a component that renders form elements and lets the DOM handle the form data. The alternative is a controlled component, where form data is handled by a React component.

3. How do you get a content of a certain HTML element in React ?

> We can use ref to get the content of a certain HTML element in React.

4. Why it is not a good idea to touch the DOM directly in React ?

> When you develop a React application do not touch the DOM directly because React has its own way of handling the DOM manipulation.

5. What is most frequently used in React ? Controlled or Uncontrolled input.

> Most of the time we use controlled input instead of uncontrolled input.

6. What do you need to write uncontrolled input?

> We need to use ref to write uncontrolled input.

7. Does state require to write uncontrolled input?

> No, we don't need to use state to write uncontrolled input.

8. When do you use uncontrolled input?

> We use uncontrolled input when we want to target some element on the DOM.

9. When do you use controlled input?

> We use controlled input when we want to handle the form data in the component’s state.

10. Do you use a controlled or uncontrolled input to validate form input fields?

> We use a controlled input to validate form input fields.

🎉 CONGRATULATIONS ! 🎉

[<< Day 12](../12_Day_Forms/12_forms.md) | [Day 14 >>](../14_Day_Component_Life_Cycles/14_component_life_cycles.md)
