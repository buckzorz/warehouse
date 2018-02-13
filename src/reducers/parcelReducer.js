import initalState from './initialState'

export default function parcelReducer(state = initalState.parcels, action){
    switch(action.type){
        case 'LOAD_PARCEL_SUCCESS':
            //console.log('action' + JSON.parse(action.payload))
            return [...state, action.payload]
        default: 
            return state
    }
}