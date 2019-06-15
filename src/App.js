import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

class App extends React.Component {
  inputChanged$ = new Subject();
  componentDidMount() {
    this.inputChanged$
      .asObservable()
      .pipe(debounceTime(300))
      .subscribe(x => {
        console.log(x);
      });
  }
  handleInputChange = e => {
    this.inputChanged$.next(e.target.value);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={this.handleInputChange} />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.jss</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
