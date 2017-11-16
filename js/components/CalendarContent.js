import React from 'react';
import CalendarButton from '../components/CalendarButton';

export default class CalendarContent extends React.Component {

    constructor(props){
        super(props);
    }

    getMonthDays(){
        const year = this.props.year,
            month = this.props.month;
        const temp = new Date(year, month, 0);
        return temp.getDate();
    }

    getFirstDayWeek(){
        const year = this.props.year,
              month = this.props.month;

        const date = new Date(year+'/'+month+'/1');
        const Weekdays = date.getDay();

        return Weekdays;
    }



    render() {
        let currYear = this.props.year;
        let currMonth = this.props.month;
        let arry1 =[],arry2 = [];
        let getDays = this.getMonthDays(),
            FirstDayWeek = this.getFirstDayWeek();
        for(let i = 0 ;i < FirstDayWeek; i++ ){
            arry1[i] = i;
        }
        for(let i = 0 ;i < getDays; i++ ){
            arry2[i] = (i+1);
        }

        let node1 = arry1.map(function(item){return <CalendarButton key={item} year={currYear} month={currMonth} day=" "/>});
        let node2 = arry2.map(function(item){return <CalendarButton key={item} year={currYear} month={currMonth} day={item}/>});



        return (
            <div >
                <div className="weekday">
                    <ul>
                        <li>日</li>
                        <li>一</li>
                        <li>二</li>
                        <li>三</li>
                        <li>四</li>
                        <li>五</li>
                        <li>六</li>
                    </ul>
                </div>
                <div  className="CalendarDay">
                    <ul>{node1}{node2}</ul>
                </div>
            </div>
        )
    }
}
