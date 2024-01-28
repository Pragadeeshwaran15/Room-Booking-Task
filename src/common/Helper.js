export const findIndex=(Array,id)=>{
    for(let i=0;i<Array.length;i++){
        if(Array[i].id=id){
            return 1
        }
    }
    return -1;
}