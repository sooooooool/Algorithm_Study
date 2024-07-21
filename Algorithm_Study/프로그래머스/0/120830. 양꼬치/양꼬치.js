function solution(n, k) {
    const lamb = 12000;
    const drink = 2000;
    const freedrinks = Math.floor(n/10);
    
    const paydrinks = k - freedrinks;
    
    const totalpay = (n * lamb) + (paydrinks * drink);
    return totalpay;
}