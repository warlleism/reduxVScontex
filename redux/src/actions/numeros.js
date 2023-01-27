//action creator
export function alterarNumeroMinimo(novoValor) {
    return {
        type: 'NUM_MIN_ALTER',
        payload: novoValor
    }
}

export function alterarNumeroMaximo(novoValor) {
    return {
        type: 'NUM_MAX_ALTER',
        payload: novoValor
    }
}