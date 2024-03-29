import React, { Component } from "react";

class Counter extends Component {
  /*binding event handlers
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  /*conditional rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags :(</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  */

  /*handling events commented out due to removal of local state
  handleIncrement = () => {
    //updating state
    this.setState({ value: this.state.value + 1 });
  };
  */

  //passing event arguement
  doHandleIncrement = () => {
    this.handleIncrementA({ id: 1 });
  };

  /*passing event argument
  handleIncrementA = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  */

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div>
          {this.props.children}
          <span className={this.getBadgeClasses()} style={{ fontSize: 30 }}>
            {this.formatCount()}
          </span>
          <button
            //onClick={this.doHandleIncrement}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 1 ? "One" : value;
  }
}

export default Counter;
