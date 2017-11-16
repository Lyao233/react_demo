import React from 'react';


/**
 * 日历头框架组件
 */
export default class CalendarHeader extends React.Component{

    animals =["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];

    constructor(props){
        super(props);
        this.state = {year: this.props.year, month: this.props.month};
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
    }

    onChangeYear(event) {
        const newYear = event.target.value;
        this.setState({year: newYear});
        this.props.callbackParent(newYear,this.state.month);
    }

    onChangeMonth(event) {
        const newMonth = event.target.value;
        this.setState({month: newMonth});

        this.props.callbackParent(this.state.year,newMonth);
    }


    render() {

        const yearRows = [];
        const monthRows = [];

        for(let i=1900;i<2050;i++){
            yearRows.push(<option key={i} value={i}>{i}</option>);
        }
        for(let i=1;i<13;i++){
            monthRows.push(<option key={i} value={i}>{i}</option>);
        }

        //年份转生肖
        const yearAnimal = this.animals[(this.state.year-4)%12];

        return (
            <div>
                <div className="Box-header">
                    <div colSpan='7'>
                        <span>公历</span>
                        <select id='yearSelect' onChange={this.onChangeYear} value={this.state.year} >
                            {yearRows}
                        </select>
                        <span>年</span>
                        <select id='monthSelect'onChange={this.onChangeMonth} value={this.state.month} >
                            {monthRows}
                        </select>
                        <span>月</span>
                        <span>【{yearAnimal} 年】</span>
                    </div>
                </div>
            </div>


        )
    }
}