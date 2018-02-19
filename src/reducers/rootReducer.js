import { combineReducers } from 'redux'
import parcels from './parcelReducer'
import warehouse from './warehouseReducer'
import fetchReducer from './fetchReducer'

const rootReducer = combineReducers({
    parcels,
    warehouse,
    fetchReducer
})

export default rootReducer