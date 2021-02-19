import "./styles/App.css";
import React, { Component } from "react";

// Component imports
import Listing from "./components/MyListing";
import MyForm from "./components/MyForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject_title: "",
      subject_description: "",
      subject_dificulty: "easy",
      dummy_data: 0,
    };
    this.collectDataFromForm = this.collectDataFromForm.bind(this);
  }

  collectDataFromForm(data) {
    const { form_title, form_description } = data;
    for (let prop in data) {
      console.log("From APP: " + prop + ": " + data[prop]);
    }
  }

  render() {
    return (
      <main className="section is-tablet has-background-success">
        <h3 className="title is-size-5-mobile is-size-3-table is-size-3 has-text-centered has-text-white"> App Header Title</h3>
        <div className="columns">
          {/* Input Section */}
          <div className="container column is-two-fifths is-full-mobile">
            <MyForm collectData={this.collectDataFromForm} />
          </div>
          <div className="container column is-3">
            
          </div>
        </div>
      </main>
    );
  }
}

export default App;
