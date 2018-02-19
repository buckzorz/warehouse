import initalState from './initialState'

export default function warehouseReducer(state = initalState.warehouse, action){
    switch(action.type){
        case 'SAVE_PARCEL':
            return [...state, action.payload]
        default:
            return state
    }
}