const initialState = {
    position: 0,
    player: '',
    opponent: ''
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POSITION':
            return { ...state, randomDice: action.payload.randomDice }
        case 'ADD_PLAYER':
            return { ...state, player: action.payload.player }
        case 'ADD_OPPONENT':
            return { ...state, opponent: action.payload.opponent }
        default:
            return state
    }

}

export default gameReducer
