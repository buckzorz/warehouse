export function fetchParcel(refId){
    return function(dispatch){
        dispatch(changeFetchStatus(true))
        return fetch('http://localhost:3004/parcels/' + refId).then(response => {
            if(response.status === 404) 
                {
                    dispatch(loadParcelFail('Error, parcel not found'))
                    dispatch(changeFetchStatus(false))
                    throw('error')
                } 
                else 
                { 
                    return response.json()
                }}).catch(error => {
            throw(error)
        }).then(parcel => {
            dispatch(loadParcelSuccess(parcel))
            dispatch(changeFetchStatus(false))
        }).catch(error => {
            throw(error)
        })
    }
}

export function loadParcelSuccess(parcel){
    return {
        type: 'LOAD_PARCEL_SUCCESS',
        payload: parcel
    }
}

export function loadParcelFail(error){
    return {
        type: 'LOAD_PARCEL_FAIL',
        payload: error
    }
}

export function clearFetchedParcels(parcels){
    return{
        type: 'CLEAR_FETCHED_PARCELS'
    }
}

export function changeFetchStatus(status){
    return{
        type: 'CHANGE_FETCH_STATUS',
        payload: status
    }
}

export function saveToWarehouse(parcels){
    return function(dispatch){
      parcels.forEach(parcel => {
          fetch('http://localhost:3004/warehouse/', {
            method: 'POST',
            body: JSON.stringify(parcel),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json()).catch(error => console.log('Error: ', + error)).then(
            response => {
                dispatch(clearFetchedParcels())
            }
        )
      })
    }
}