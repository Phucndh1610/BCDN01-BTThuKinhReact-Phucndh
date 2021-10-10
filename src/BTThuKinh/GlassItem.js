import React, { Component } from 'react'

export default class GlassItem extends Component {

    render() {
        let { sp, thuKinh } = this.props;

        return sp.map((glass, index) => {
            return <img className="ml-2 p-2 glass"
                src={glass.url} alt=".." key={index} onClick={() => {
                    thuKinh(glass);
                }} />
        });
    }
}
