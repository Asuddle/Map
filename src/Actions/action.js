export const DataFilter=(data)=>{
    console.log(data)
    return{
        type:'FILTER_DATA',
        payload:data
    }
}