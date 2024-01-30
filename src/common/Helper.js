export const findIndex=(Array,id)=>{
    for(let i=0;i<Array.length;i++){
        if(Array[i].roomId==id){
            return i
        }
    }
    return -1;
}