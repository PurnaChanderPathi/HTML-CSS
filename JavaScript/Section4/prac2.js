let store = [250,645,300,900,50];

for(let i=0; i<store.length;i++){
    let discount = store[i]/10;
    let finalPrice = store[i]-discount;
    store[i] = finalPrice;
}
console.log(store);