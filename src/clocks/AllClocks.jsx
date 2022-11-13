import React, { Component } from 'react';
import Clock from './Clock'
class AllClocks extends Component {
    constructor(props) {
        super(props);
        this.state = { JLM: 1, NYC: 1, LON: 1 }
        this.resetAll = this.resetAll.bind(this);
        this.doubleAll = this.doubleAll.bind(this);
        this.randomAll = this.randomAll.bind(this);
        this.reset = this.reset.bind(this);
        this.double = this.double.bind(this);
    }

    resetAll(){
        this.setState({JLM: 1, NYC: 1, LON: 1})
    }
    randomAll(){
        this.setState({JLM: this.getRandom(), NYC: this.getRandom(), LON: this.getRandom()})
    }
    getRandom(){
        return Math.round(Math.random()*9)+1;
    }
    doubleAll(){
        const {JLM, NYC, LON} = this.state
        this.setState({JLM: JLM*2, NYC: NYC *2, LON: LON*2})
    }

    reset(event){
        const local = event.target.name;
        console.log(event.target.name);
        this.setState({[local]: 1});
    }
    double(event){
        const local = event.target.name;
        console.log(local);
        this.setState({[local]: this.state[local] *2});
        // console.log(this.state.local);
    }

    render() {
        const infoIl = {cityName: 'JLM', local: 'he-IL', timeZone: 'Israel'};
        const infoNy = {cityName: 'NYC', local: 'en-US', timeZone: 'America/New_York'};
        const infoLo = {cityName: 'LON', local: 'en-GB', timeZone: 'Europe/London'};
        return (<>
            <div>all clocks</div>
            <button onClick={this.resetAll}>reset all</button>
            <button onClick={this.doubleAll}>double all</button>
            <button onClick={this.randomAll}>random all</button>
            <Clock info={infoIl} updateInterval={this.state.JLM} reset={this.reset} double={this.double} />
            <Clock info={infoNy} updateInterval={this.state.NYC} reset={this.reset} double={this.double} />
            <Clock info={infoLo} updateInterval={this.state.LON} reset={this.reset} double={this.double} />
          
            </>  );
    }
}
 
export default AllClocks;