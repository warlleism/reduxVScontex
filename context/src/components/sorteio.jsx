import React, { useContext } from 'react'
import Card from './card'
import './intervalo.css'
import { Context } from '../context/provider'

const Sorteio = (props) => {

    const { max, min } = useContext(Context)


    const aleatorio = parseInt(Math.random() * (max - min) + min)

    return (
        <Card title={'Sorteio de números'} blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}



export default Sorteio;