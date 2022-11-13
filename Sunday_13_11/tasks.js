/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
// function doubleNumbers(arr){}
  // your code here


  // your code here

  // let arr=[2,5,10];
  // let double=arr.map(function(element){
  //   return element*2;

  // })
  // console.log();

/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/

// function stringItUp(arr){
//   // your code here


// }


/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

// function capitalizeNames(arr)
//   mystr=["huda","raeD","ALAUSAILy"];

// let capitalizeNames = mystr.map(function (element) {

//     str = element.toLowerCase();
//     cap = str.substring(0, 1).toUpperCase() + str.substring(1);
//   return cap;

// });
// console.log(capitalizeNames);

  


/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/


// function namesOnly(arr){
      
//       let result = arr.map(e => e.name)
//       return result;
//     }
//     console.log(namesOnly([
//              {
//                  name: "Angelina Jolie",
//                  age: 80
//              },
//              {
//                  name: "Eric Jones",
//                  age: 2
//              },
//              {
//                  name: "Paris Hilton",
//                  age: 5
//              },
//              {
//                  name: "Kayne West",
//                  age: 16
//              },
//              {
//                  name: "Bob Ziroll",
//                  age: 100
//              }
//              ]));
      
/*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

// function makeStrings(arr){
     
//       let result = arr.map(e => {
//           if(e.age > 20){
//               return e.name  + "can go to The Matrix"
//           }else{
//               return e.name + "is under age!!"
//           }
//       })
//       return result;
//     }
  
//       console.log(makeStrings([
//          {
//              name: "Angelina Jolie",
//              age: 80
//          },
//          {
//              name: "Eric Jones",
//              age: 2
//          },
//          {
//              name: "Paris Hilton",
//              age: 5
//          },
//          {
//              name: "Kayne West",
//              age: 16
//          },
//          {
//              name: "Bob Ziroll",
//              age: 100
//          }
//          ]));
    

/*
 * Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */

// function readyToPutInTheDOM(arr){
     
//       let result = arr.map(e => `<h1>${e.name}</h1><h2>${e.age}</h2>`)
//       return result
//     }
  
//         console.log(readyToPutInTheDOM([
//          {
//              name: "Angelina Jolie",
//              age: 80
//          },
//          {
//              name: "Eric Jones",
//              age: 2
//          },
//          {
//              name: "Paris Hilton",
//              age: 5
//          },
//          {
//              name: "Kayne West",
//              age: 16
//          },
//          {
//              name: "Bob Ziroll",
//              age: 100
//          }
//          ]));
    
    




/*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/

// function doubleValues(arr){
//         // your code here
//         let result = arr.map(e => e * 2)
//         return result;
//       }
      
//       console.log(doubleValues([1,-2,-3]))
//       console.log(doubleValues([1,2,3]))
    
  
  /*
  * Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */
  
  // function doubleValues(arr){
         
  //         let result = arr.map(e => e * 2)
  //         return result;
  //       }
        
  //       console.log(doubleValues([1,-2,-3]))
  //       console.log(doubleValues([1,2,3]))
    
  /*
  * Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
  
  // function extractKey(arr, key){
     
  //      let result = arr.map(e => e.name)
  //      return result 
  //   }
  //   console.log(
  //       extractKey([{name: 'Elie'},
  //        {name: 'Tim'},
  //         {name: 'Matt'},
  //          {name: 'Colt'}], 'name')
  //   )
  /*
  * Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */
  // function extractFullName(arr){
  //         // your code here 
  //           let result = arr.map(e => e.first + " " + e.last)
  //           return result;
  //      }
    
    
  //   console.log(extractFullName([
  //       {first: 'Elie',last:"Schoppik"},
  //        {first: 'Tim', last:"Garcia"},
  //         {first: 'Matt', last:"Lane"},
  //          {first: 'Colt', last:"Steele"}]))
    

  /*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
// function doubleValues(arr){
//     //Your Code Here
//     arr.forEach((item, index, arr) =>{
//         arr[index] = item * 2;
//     })
//     return arr
//  }
//  console.log(doubleValues([1,2,3]))
 /*
 * Exercise 2:
 * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 *
 * Test Cases:
 *   onlyEvenValues([1,2,3]) 
 *   onlyEvenValues([5,1,2,3,10]) 
 * 
 * Result:
 *  Test Case 1:  [2]
 *  Test Case 2: [2,10]
 */
//  function onlyEvenValues(arr){
//      //Your Code Here
//      let newArr = []
//      arr.forEach((item, index, arr) =>{
//         if(item % 2 == 0){
//             newArr.push(item)
//         }
//     })
//     return newArr
//  }
 
//  console.log(onlyEvenValues([1,2,3]))
//  console.log(onlyEvenValues([5,1,2,3,10]))
 /*
 * Exercise 3:
 * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
 *
 * Test Case:
 *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
 *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
 *  
 * Result:
 * Test Case 1: ["ct", "mt", "tm", "uy"]
 * Test Case 2: ['hi', 'ge', 'se']
 *
 */
//  function showFirstAndLast(arr){
//     //Your Code Here
//     let newArr = []
//     arr.forEach((item) =>{
//         newArr.push(item[0] + item[item.length -1]) 
//     })
//     return newArr
//  }
//  console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']) )
//  console.log(showFirstAndLast(['hi', 'goodbye', 'smile']) )
 /*
 * Exercise 4:
 * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
 * to the function with the new key and value added for each object 
 * 
 * Test Cases:
 *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
 *   
 * Result:
 *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
 *
 */
//  function addKeyAndValue(arr,title,value){
//      //Your Code Here
//      let newArr = []
//      arr.forEach(item =>{
//         let fin = {name: item.name , title: value }
//         newArr.push(fin)

//     })
        
//      return newArr
//  }

//  console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))

