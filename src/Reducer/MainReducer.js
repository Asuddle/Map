import CITIES from '../Data/cities.json'
const initialState= CITIES

export default (state=initialState,action)=>{
    switch (action.type) {
        case'FILTER_DATA':    
        return state=action.payload
        default:
            return state
    }
}
