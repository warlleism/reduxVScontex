import React from 'react'
import Card from './card'
import './intervalo.css'
import { connect } from 'react-redux'

const Media = (props) => {
    
    const { min, max } = props

    return (
        <Card title={'Media de números'} green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media);