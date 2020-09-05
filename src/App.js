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
    window.location.reload();
  };

  onDelete = (id) => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: counters }, () => {
      this.changeTotal();
    })
  }

  changeTotal = () => {
    let newCounters = [...this.state.counters];
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
