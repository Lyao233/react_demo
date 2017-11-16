import React from 'react';
import '../../css/Box.css';
import CalendarHeader from '../components/CalendarHeader';
import CalendarContent from '../components/CalendarContent';

/**
 * 日历框架组件，包含日历头与日历内容
 */
export default class CalendarBox extends React.Component{

    constructor(){
        super();
        const Today = new Date();
        this.state = {year: Today.getFullYear(), month: Today.getMonth()+1, day: Today.getDate()};
    }

    onChildChanged(filterYear,filterMonth) {
        this.setState({year: filterYear, month:filterMonth});
    }

    render() {
        return (
            <div className="Box-content">
                <div className="Box-dateTable">
                    <CalendarHeader year={this.state.year}
                                    month={this.state.month}
                                    callbackParent={this.onChildChanged.bind(this)}/>
                    <CalendarContent year={this.state.year}
                                     month={this.state.month}
                                     day={this.state.day}/>
                </div>
            </div>
        )
    }
}
