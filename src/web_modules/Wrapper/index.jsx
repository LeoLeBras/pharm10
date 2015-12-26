import React, { Component } from 'react';
import Nav from 'Nav';
import styles from './Wrapper'

export default class Wrapper extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <Nav />
                <div className={ styles.wrapper }>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
