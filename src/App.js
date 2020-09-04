import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ],
      total: 0
    }
  }
  onAdd = (id) => {
    console.log(id, "add");
    let newCounters = [...this.state.counters];
    newCounters.map((counter) => {
      if (counter.id === id) {
        counter.value += 1;
      }
    })
    this.setState({
      counters: newCounters
    }, () => {
      this.changeTotal();
    })
  }

  onMinus = (id) => {
    console.log(id, "minus");
    let newCounters = [...this.state.counters];
    newCounters.map((counter) => {
      if (counter.id === id) {
        if (counter.value !== 0) {
          counter.value -= 1;
        }
      }
    })
    this.setState({
      counters: newCounters
    }, () => {
      this.changeTotal();
    })
  }

  onReload = () => {
    let newCounters = [...this.state.counters];
    newCounters.map((counter) => {
      return counter.value = 0;
    });
    this.setState({
      counters: newCounters,
      total: 0
    })
  }

  onReset = () => {
    console.log("reset");
    window.location.reload();
  };

  onDelete = (id) => {
    console.log(id)
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: counters }, () => {
      this.changeTotal();
    })
  }

  changeTotal = () => {
    console.log("change")
    let newCounters = [...this.state.counters];
    console.log(newCounters);
    let newTotal = 0;
    newCounters.forEach((counter) => {
      if (counter.value !== 0) {
        newTotal += 1;
      }
    });
    this.setState({
      total: newTotal
    })
  }

  render() {
    return (
      <div className="App">
        <Counter counters={this.state.counters}
          onAdd={this.onAdd}
          onMinus={this.onMinus}
          total={this.state.total}
          onReload={this.onReload}
          onReset={this.onReset}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
