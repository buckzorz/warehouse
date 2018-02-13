

export function fetchParcel(){
    return function(dispatch){
        return fetch('http://localhost:3004/parcels/2').then(response => {console.log(response); return response.json()}).then(parcel => {
            console.log(parcel)
            dispatch(loadParcelSuccess(parcel))
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