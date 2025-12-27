function createShoppingCart() {
    const items = []
    let discount=0;
    return {
        addItem(item){
            const existingItem=items.find(i=>i.id==item.id);
            if(existingItem){
                existingItem.quantity+=item.quantity
            }else{
                items.push({...item});
            }
        },
        getItems(){
            return items
        },
        updateQuantity(id,quantity){
            const existingItem=items.find(i=>i.id==id);
            if(existingItem){
                existingItem.quantity=quantity
            }
        },
        removeItem(id){
            const existingItem=items.find(i=>i.id==id)
            if(existingItem){
                items.pop(existingItem)
            }
        },
        getTotal(){
            const total= items.reduce((sum,item)=>
                 sum+item.price*item.quantity
            ,0);
            return total-(total*discount)/100;
        },
        getItemCount(){
            return items.reduce((count,item)=>{
                return count+item.quantity
            },0)
        },
        isEmpty(){
            return items.length===0             
        },
        applyDiscount(value){
            
           discount=value
            
        }
    }
}
const cart=createShoppingCart()

    cart.addItem({id: 1,name:"laptop",price: 999, quantity: 1})
    cart.addItem({id: 2,name:"mouse",price: 29, quantity: 3})
    console.log(cart.getItems());
    cart.updateQuantity(1,3)
    console.log(cart.getItems());
    console.log(cart.getTotal());
    console.log(cart.getItemCount());
    console.log(cart.isEmpty());
    cart.applyDiscount(10)
    console.log(cart.getTotal());
    
    
    
    
    
    
    