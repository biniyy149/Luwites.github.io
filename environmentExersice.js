function makeArmy() {         //                                                                            makeArmy:function              
    let shooters = [];        //                                                                            army: function
    let i = 0;                //
    while (i < 10) {
        let shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
console.log(army[0]);