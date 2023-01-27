import React, { useContext } from 'react'
import Card from './card'
import './intervalo.css'
import { Context } from '../context/provider'

const Intervalo = (props) => {

    const { max, setMax, setMin, min } = useContext(Context)

    return (
        <Card title={'Intervalo de números'} red>
            <div className='intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => setMin(+e.target.value)} />
                </span>
                <span >
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => setMax(+e.target.value)} />
                </span>
            </div>

        </Card>
    )
}

export default Intervalo;