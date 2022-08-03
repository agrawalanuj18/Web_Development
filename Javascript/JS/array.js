function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        const randomNames = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
        let randomNumber = Math.floor((Math.random())*(randomNames.length));
        return randomNames[randomNumber];
        
        
        
    
    
    /******Don't change the code below*******/    
    }
    console.log(whosPaying())