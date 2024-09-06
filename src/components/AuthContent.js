import React, { Component } from 'react'
import { request } from './axios_helper'

export default class AuthContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [] // Inicializa como un array vacío
        };
    }

    componentDidMount() {
        request("GET", "/messages", {})
        .then((response) => {
            if (Array.isArray(response.data)) {
                this.setState({ data: response.data });
            } else {
                console.error("La respuesta no es un array:", response.data);
            }
        }).catch((error) => {
            console.error("Error al hacer la solicitud:", error);
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                {Array.isArray(data) ? (
                    data.map((line, index) => <p key={index}>{line}</p>)
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </div>
        );
    }
}
