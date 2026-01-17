

const ReducerCard = (currentlist, action) => {
    // console.log(currentlist);

    switch (action.type) {
        case "ADD": {
            const product = (action.payload.product);
            
            const exist = currentlist.find((item)=>{
               return item.id == product.id })

            if (exist) {                
                          return currentlist.map(item =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }  


            return [...currentlist, { ...product, count: 1 }]
        }

        case "increase":{
           return currentlist.map(item =>
                item.id == action.payload?{...item,count:item.count+1}:item
            )
        }
        case "decrease":{
               return currentlist.map(item =>
            
                item.id == action.payload?{...item,count:item.count-1}:item
            )

        }
        case "delete":{
            return currentlist.filter((item)=>{
                return item.id !== action.payload

            })
        }



        default: {
            throw Error("this is undefind action " + action.type)
        }
    }

// console.log(currentlist);


}
export default ReducerCard