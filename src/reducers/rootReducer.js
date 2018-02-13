import { combineReducers } from 'redux'
import parcels from './parcelReducer'

const rootReducer = combineReducers({
    parcels
})

export default rootReducer