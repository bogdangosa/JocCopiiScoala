
export const xpToLevel = (xp) =>{
    let rate = 25;
    let level = 1;
    xp-=rate;
    while(xp>0){
        level++;
        xp-=rate;
        if(rate<200)
            rate=rate*2;
    }

    return level;
}