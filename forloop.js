let arr = [1,2,3,4,5,"Aasif","Saeem",]
// console.log(arr.length)

function print(data){
for(let i=0;i<data.length;i++){
    
    // console.log(data)
    if(data[i]==5){
      return console.log(data[i],"yes")
    }else{
       return console.log("test",i)
    }
}
}
// print(arr)

function maje(){
    let arr = []
    for(let i = 0;i<4;i++){
        if(i==2){
            return arr.push(i)
        console.log("right")
    }else{
       
        console.log('wrong')
    }
    console.log(arr)
}
}
maje()
