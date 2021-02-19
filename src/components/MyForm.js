import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.generateRandomTaskId(),
      subject_name: "",
      subject_description: "",
      subject_owner: "",
      date_created: new Date().toDateString(),
      date_completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  inputEvaluation(id, data) {
    switch (id) {
      case "subject-input":
        this.setState({ subject_name: data.toUpperCase() });
        break;
      case "description-input":
        this.setState({ subject_description: data });
        break;
      case "author-input":
        this.setState({ subject_owner: data });
        break;
      default:
        console.error("Sorry, I cannot figure your input.");
        return;
    }
  }

  handleChange(e) {
    this.inputEvaluation(e.target.id, e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const {} = this.state;
    this.props.collectData({ ...this.state });
  }

  handleReset(e) {
    e.preventDefault();
    const { subject_name, subject_description, subject_owner } = this.state;
    // Resets states of title, description, owner.
    this.setState({
      subject_name: "",
      subject_description: "",
      subject_owner: "",
    });
  }

  generateRandomTaskId() {
    //NOTE: Copy pasted from a github user.

    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return "Tsk_" + Math.random().toString(36).substr(2, 9);
  }

  render() {
    // Extract some of the states property
    const { id, subject_name, subject_description } = this.state;
    return (
      <form className="has-background-white box has-rounded p-4">
        {/* Subject title */}
        <div className="field">
          <label htmlFor="subject-input">Subject title</label>
          <div className="control">
            <input
              className="input is-primary"
              id="subject-input"
              type="text"
              placeholder="Your name"
              autoComplete="off"
              value={subject_name}
              onChange={this.handleChange}
            />
          </div>
        </div>
        {/* Subject description */}
        <div className="field ">
          <label htmlFor="description-input">Description</label>
          <div className="control">
            <textarea
              className="textarea is-primary"
              id="description-input"
              cols="10"
              rows="10"
              placeholder="Enter your description"
              value={subject_description}
              onChange={this.handleChange}
              
            ></textarea>
          </div>
        </div>

        {/* Author name */}
        <div className="field ">
          <div className="control">
            <label htmlFor="author-input">Subject author name</label>
            <input
              className="input is-primary"
              id="author-input"
              type="text"
              placeholder="Author name"
              autoComplete="off"
              value={this.state.subject_owner}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field is-grouped is-grouped-right">
          <div className="control">
            <button
              className="button is-link"
              id="submit-button"
              onClick={this.handleSubmit}
              >
              Submit
            </button>
          </div>
          <div className="control">
            <button
              className="button is-danger is-outlined"
              id="submit-button"
              onClick={this.handleReset}
              >
              Reset Fields
            </button>
          </div>
        </div>
      </form>
    );
  }
}
function greenDummyButton() {}
export default MyForm;
