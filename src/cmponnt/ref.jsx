import React, { Component, createRef } from 'react'

export default class Parent extends Component {
    myRef = createRef()
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <button onClick={() =>  {this.myRef.current.value = "nhynb"; console.log(this.myRef)} } >אח</button>
            </div>
        )
    }
}
