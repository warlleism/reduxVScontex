import React, { useContext } from 'react'
import Card from './card'
import './intervalo.css'
import { Context } from '../context/provider'

const Soma = () => {
    
    const { max, min } = useContext(Context)

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



export default Soma;