import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counterId !== counter.id
    );
    this.setState({ counters: counters });
    // const index = counters.findIndex(counter => counter.id == counterId);
    // counters[index] = { id: counterId, value: 0 };
    // console.log("hi");
    // this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            value={counter.value}
            onDelete={this.handleDelete}
            id={counter.id}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
