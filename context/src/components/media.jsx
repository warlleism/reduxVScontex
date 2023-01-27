import React, { useContext } from 'react'
import Card from './card'
import './intervalo.css'
import { Context } from '../context/provider'

const Media = () => {

    const { max, min } = useContext(Context)

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


export default Media;