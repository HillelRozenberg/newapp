import  { Component } from 'react';

class AppExample extends Component {
    constructor(props) {
        super(props);
        this.state = {clickMe:false}
        console.log('constructer');
    }
    clickMe=()=> {
        this.setState({clickMe:!this.state.clickMe})
    }
    shouldComponentUpdate(nextprops, nextState) {
        console.log('shoud Comp update');
    //   return  nextState.clickMe
        return true
       
    }
    componentDidMount() {
        console.log('mounted');
     }
    componentDidUpdate() {
        console.log('updated');
    }
    componentWillUnmount() {
        console.log('delete');
    }
    // static getDerivedStateFromProps(nextprops, nextstate) {
    //     console.log('getDerivedStateFromProps');
    //     return {clickMe:nextprops}
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return prevState
    }
    render() {
        console.log('render');
        return (<>
            
        <button onClick={this.clickMe}>{this.state.clickMe?'clicked':'not clicked' }</button>
        </>);
    }
}
 
export default AppExample;