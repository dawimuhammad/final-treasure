import store from '../store/store'

export const rollDice = (randomDice) => {
    return (dispatch, getState) => {

        const position = getState().position
      
        dispatch(addPos(position))
    }
  }

export const addPos = () => {
    return {
        type: 'ADD_POSITION',
        payload: {
            password: password
        }
    }
}