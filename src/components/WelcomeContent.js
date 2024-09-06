import React, { Component } from 'react'

export default class WelcomeContent extends Component {
    render() {
        return (
            <div className='row justify-content-md-center'>
                <div className='jumbotron jumbotron-fluid'>
                    <div className='container p-4'>
                        <h1 className='display-4'>Welcome</h1>
                        <p className='lead'>Login to see protected content</p>
                    </div>
                </div>
            </div>
        )
    }
}
