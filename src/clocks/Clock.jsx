import React, { Component } from 'react';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
        this.updateDate = this.updateDate.bind(this);
    }
    updateDate(){
        this.setState({ date: new Date() });
    }
    componentDidMount(){
        // console.log('Mounted');
        if(!this.interval){
            this.interval = setInterval(this.updateDate, this.props.updateInterval * 1000);
        }
    }
    componentDidUpdate(prevprops){
        if(this.props.updateInterval !== prevprops.updateInterval){
            clearInterval(this.interval);
            this.interval = setInterval(this.updateDate, this.props.updateInterval * 1000);
        }
        // console.log('Updated');
    }
    render() { 
        const { updateInterval, reset, double} = this.props;
        const {cityName, local, timeZone} = this.props.info;
        const time = this.state.date.toLocaleString(local, {timeZone});
        // console.log(reset)
        return (
            <>
            
                <div>{`${cityName} ==> update interval = ${updateInterval}`}</div>
                <div>the time is {time}</div>
                <button name={cityName} onClick={reset}>reset my interval</button>
                <button name={cityName} onClick={double}>double my interval</button>
                <button onClick={() => this.setState({date: new Date()})}>update me now</button>
               
            </>
        );
    }
}
 
export default Clock;