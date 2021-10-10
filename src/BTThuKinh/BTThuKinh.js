import React, { Component } from 'react'
import GlassItem from './GlassItem'

export default class BTThuKinh extends Component {
    productList = [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./img/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./img/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./img/v3.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./img/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 6,
            price: 60,
            name: "PRADA P9700",
            url: "./img/v6.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 7,
            price: 80,
            name: "FENDI F8750",
            url: "./img/v7.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 8,
            price: 100,
            name: "FENDI F8500",
            url: "./img/v8.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 9,
            price: 60,
            name: "FENDI F4300",
            url: "./img/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        imgGlass: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./img/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    thuKinh = (kinh) => {
        this.setState({
            imgGlass: kinh
        })
    }

    render() {
        let {imgGlass} = this.state;
        return (
            <div className="bg-ground" style={{ backgroundImage: 'url("./img/background.jpg")' }}>
                <div className="header">
                    <h3 className="text-center text-light p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>TRY GLASSES APP ONLINE
                    </h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative"><img className="position-absolute" src="./img/model.jpg" alt="model.jpg" style={{ width: 250 }} />
                                    <img className="position-absolute glassesStyle" src={imgGlass.url} alt="..." />
                                    <div className="position-relative product">
                                        <span className="font-weight-bold pr-name">{imgGlass.name}</span> <br /><span className="contact">{imgGlass.desc} </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src="./img/model.jpg" alt="model.jpg" style={{ width: 250 }} />
                            </div>
                        </div>
                        <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
                            <GlassItem sp={this.productList} thuKinh={this.thuKinh} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
