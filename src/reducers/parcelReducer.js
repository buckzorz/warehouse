import initalState from './initialState'

export default function parcelReducer(state = initalState.parcels, action){
    switch(action.type){
        case 'LOAD_PARCEL_SUCCESS':
            return [...state, action.payload]
        case 'LOAD_PARCEL_FAIL':
            return state
        case 'CLEAR_FETCHED_PARCELS':
            return []
        default: 
            return state
    }
}

