import React from 'react';
import {calendar} from '../../lib/stl';

/**
 * 单个的日期组件
 */
export default class CalendarButton extends React.Component {


    constructor(props) {
        super(props);
    }




    render(){
        let dayCn = null;
        //特殊日期
        let specialStyle = {
            color: 'red'
        };
        //鼠标悬浮
        let backgroundColorStyle = {
            backgroundColor:'#D0D0D0'
        };
        let str1;
        let str2;

        let todayStyle = {};
        let lunarStyle = {};
        let solarStyle = {};
        //获取农历数据
        if(this.props.day !== " ") {
            const lunar = calendar.solar2lunar(this.props.year, this.props.month, this.props.day);
            if(lunar.isTerm){
                dayCn = lunar.Term;
                lunarStyle = specialStyle;
            }else{
                const ftv = getFtv(lunar.cMonth,lunar.cDay,lunar.lMonth,lunar.lDay);
                if(ftv !== " "){
                    dayCn = ftv;
                    lunarStyle = specialStyle;
                }else {
                    const temp = lunar.IDayCn;
                    if (temp === "初一") {
                        dayCn = lunar.IMonthCn;
                    } else {
                        dayCn = temp;
                    }
                }

            }
            //改变公历周末数字颜色
            if (lunar.nWeek === 6||lunar.nWeek === 7){

                solarStyle=specialStyle;
            }

            const tDate=new Date();
            if (lunar.cYear === tDate.getFullYear()&&lunar.cMonth === tDate.getMonth()+1&&lunar.cDay === tDate.getDate()){
                todayStyle = backgroundColorStyle;
            }

            str1 = "农历 " + lunar.gzYear + "年 " + lunar.IMonthCn + " "  + lunar.IDayCn + ", 点击查看历史上的今天";
            str2 = "http://zh.mobile.bywiki.com/wiki/" + lunar.cMonth + "月" + lunar.cDay + "日";

        }

        return(
            <div>
                <li id="datePicker" style={todayStyle} title={str1} ><a  href={str2} target="_blank" style={solarStyle} id="solarDate">{this.props.day}</a><p style={lunarStyle} id="lunarDate">{dayCn}</p></li>
            </div>
        )
    }
}

function getFtv(month,day,lmonth,lday){
    //公历节日
    const sFtv = [
        "0101 元旦",
        "0214 情人节",
        "0308 妇女节",
        "0312 植树节",
        "0315 消费者权益日",
        "0401 愚人节",
        "0501 劳动节",
        "0504 青年节",
        "0512 护士节",
        "0601 儿童节",
        "0701 建党节",
        "0801 建军节",
        "0910 教师节",
        "0928 孔子诞辰",
        "1001 国庆节",
        "1006 老人节",
        "1024 联合国日",
        "1224 平安夜",
        "1225 圣诞节"];
    //农历节日
    const lFtv = [
        "0101 春节",
        "0115 元宵节",
        "0505 端午节",
        "0707 七夕情人节",
        "0715 中元节",
        "0815 中秋节",
        "0909 重阳节",
        "1208 腊八节",
        "1224 小年"];

    let result = " ";
    for (let i=0;i<sFtv.length;i++){
        if (parseInt(sFtv[i].substr(0,2))===(month)){
            if (parseInt(sFtv[i].substr(2,4))===(day)){
                result = sFtv[i].split(" ")[1];
            }
        }
    }
    for(let i=0;i<lFtv.length;i++){
        if (parseInt(lFtv[i].substr(0,2))===(lmonth)){
            if (parseInt(lFtv[i].substr(2,4))===(lday)){
                result = lFtv[i].split(" ")[1];
            }
        }
    }


    return result;
}
