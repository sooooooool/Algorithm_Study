function solution(hp) {
    let generalAnts = Math.floor(hp / 5);
    hp = hp % 5;
    
    let soldierAnts = Math.floor(hp / 3);
    hp = hp % 3;
    
    let workAnts = hp;
    
    return generalAnts + soldierAnts + workAnts;
}