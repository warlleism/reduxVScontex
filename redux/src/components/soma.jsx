import React from 'react'
import Card from './card'
import './intervalo.css'
import { connect } from 'react-redux';

const Soma = (props) => {
    const { min, max } = props
    return (
        <Card title={'Soma dos números'} red>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Soma);