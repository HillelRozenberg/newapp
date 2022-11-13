import React, { Component } from 'react';
class MemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        console.log(event);
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <form className="meme-form"
                    onSubmit={this.handleSubmit}
                >
                    <input value={this.state.topText}
                        placeholder="Top Text"
                        type='text'
                        name='topText'
                        onChange={this.handleChange}
                    />

                    <input value={this.state.bottomText}
                        placeholder="Bottom Text"
                        type='text'
                        name='bottomText'
                        onChange={this.handleChange}
                    />

                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        );
    }
}

export default MemeGenerator;