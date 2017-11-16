import React, {Component} from 'react';
import './App.css';
import CalendarBox  from './js/containers/CalendarBox';
import DetailBox from './js/containers/DetailBox';

/**
 * 主框架组件
 */
class App extends Component {

    constructor(){
        super();

    }


    render() {

        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Calendar</h1>
            </header>
              <div className="App-content">
                  <CalendarBox/>
                  <DetailBox/>
              </div>

          </div>
        );
  }
}

export default App;


