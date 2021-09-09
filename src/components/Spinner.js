import React, { Component } from 'react'
import load from './spin.gif';

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-3" src={load} alt="load" />
            </div>
        )
    }
}
