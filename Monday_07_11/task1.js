    //    1

    function tellFortune(jobTitle, location, partner, numKids) {
        var future = 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' +
       partner + ' ' + ' with ' + numKids + ' kids.';
        console.log(future);
    }
    
    tellFortune('software engineer','Jordan','Alice','3');
    
    
    // 2
    
    function calculateDogAge(age) {
        var dogYears = 7*age;
        console.log("Your doggie is " + dogYears + " years old in dog years!");
    }
    
    calculateDogAge(1);
    
    
    // 3
    
    function calculateSupply(age, numPerDay) {
      var maxAge = 100;
      var totalNeeded = (numPerDay * 365) * (maxAge - age);
      var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
      console.log(message);
    }
    
    calculateSupply(28, 8);
    
    
    // 4
    
    function greet(name){
        console.log('hello ' + name);
    }
    greet('Huda')
    
    
    // 5
    function double(cat) {
      return 2 * cat;
    }
    function double(x) {
      return 2 * x;
    }
    function double(x) {
      return 2 * x;
    } 
    
    
    
    // 6
    function double1(x)
    {
      return 2 * x ;
    }
      function double2(x)
      {
        return 2 * x;
    }
    function double3(x)
    {
      return 2 * x;
    }
    
    
    
    // 7
    function cube(x)
    {
        console.log(Math.pow(x, 3))
    }
    cube(4)
    
    
    
    // 8
    
    function multiply(x, y){
        return x * y
    }
    console.log(multiply(3,4))
    
    
    
    // 9
    
    function canIGetADrivingLicense(age){
        if(age >= 20){
            console.log('yes you can')
        }else{
            rest = 20 - age;
            result= `please come back after ${rest} years to get one`
            console.log(result)
        }
    }
    canIGetADrivingLicense(30)
    
    
    
    // 10
    
    function sameLength(str1, str2){
        let result = str1.length - str2.length
        console.log(result)
        if(!result){
            console.log('true')
        }else{
            console.log('false')
        }
    }
    
    sameLength("tree","clue")
    sameLength("Huda","Mohammad")
    sameLength("tree","car")
    
    
    // 11
    
    function largestNumber(first, second) {
        if (first > second ) {
            return first;
        } 
        else 
         {
            return second;
        } 
    }
    
    console.log (largestNumber (100,200));
    
    
    
    
    
    // 12
    
    function SmallestNumber(first, second,third)
     {
        if (first < second && first < third) {
            return first;
        } else if (second < first && second < third) {
            return second;
        } else {
            return third;
        }
    }
    
    console.log(SmallestNumber(100,120,80));
    
 
    
    
     
    // 13
    
    var arrayList = ["Orange", "Coding", "Academy", "Console", "Networking"];
    
    var longestString = arrayList.reduce(function(a, b) { 
      return a.length > b.length ? a : b
    }, '');
    
    
    console.log(longestString);
    
    
    
    // 14
    
    var arrayList  = ["Orange",  "Academy","For","Coding"];
            var shortest_string =   arrayList.reduce(function(a, b) {
                return a.length <= b.length ? a : b;
            })
    
            
    console.log(shortest_string);
    
    // 15
    
    function isEven(num){
      return num % 2 === 0;
    }        
    console.log(isEven(14));
    console.log(isEven(17));
    console.log(isEven(-4));
    
    // 16
    
    function isOdd(num){
      return num % 2 ==! 0;
    }        
    console.log(isOdd(14));
    console.log(isOdd(17));
    console.log(isOdd(-4));
    
    // 17
    function positive(x){
    
    return positive(x);
    
    }
    console.log(Math.abs(-5));
    console.log(Math.abs(45));
    console.log(Math.abs(-88));
    
    
    //  18
    function FullName(Fname,Lname){
    
    return fname + '' + lname;
    
    }
    console.log('Huda','Ausaily');
    
    
    // 19
    let arr = [1, 2, 3, 4, 5];
    var sum = 0;
    arr.forEach(function(num) { sum += num });
    average = sum / arr.length;
    console.log(average);
    
    // 20
    
    function random (){
       
    }
    console.log(Math.random());
    
    // 21
    
    function randomBetweenNumbers(num1, num2) {
    
    x = Math.random() * (num1 - num2) +num2;
    
    x = Math.floor(x)
    
    console.log(x)
    
    
    }
    
    
    randomBetweenNumbers(prompt(`enter the big number`) , prompt(`enter the small number`));
    
    // 22
    function scoreInUniversty (degree){
        if (degree <= 100 && degree >94 ) {
            console.log(`A`);
        }
        else if (degree <= 94 && degree >84 ){
            console.log(`B`);
        }
        else if (degree <= 84 && degree >69 ){
            console.log(`C`);
        }
        else if (degree <= 69 && degree >49 ){
            console.log(`D`);
        }
        else if (degree <= 49 && degree >0 ){
            console.log(`F`);
        }
        else {
            console.log(`You enter a wrong degree`);
        }
    }
    
    scoreInUniversty(88);
    
    //23
    
    function counter (){
     let x =0
    x = x+1
    console.log(x)
    
    }
    
    counter()