function solution(money) {
    const pricePerCoffee = 5500;
    const maxCoffees = Math.floor( money / pricePerCoffee);
    const remainingMoney = money % pricePerCoffee;
    
    return [maxCoffees, remainingMoney];
}