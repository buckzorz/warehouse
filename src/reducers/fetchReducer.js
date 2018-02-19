import initalState from './initialState'

export default function fetchReducer(state = initalState.fetchingParcels, action){
    switch(action.type){
        case 'CHANGE_FETCH_STATUS':
            return action.payload
        default: 
            return state
    }
}
