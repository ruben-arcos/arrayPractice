// 1. .length
    //Create an array called `cars` which consists of 4 different types of cars as String type. The first car type should be Ford.
    
    let cars = ['Ford', 'Subaru', 'BMW', 'Hyundai']
    console.log(`number of cars = ${cars.length}`)

// 2. .concat()
    //Create another array called `moreCars` with 4 more different types of cars. The last car type should be Honda.

    let moreCars = ['Mercedes-Benz', 'Toyota', 'Rivian', 'Honda']

    //Use the `concat` method to combine the `cars` and `moreCars` arrays into another array called `totalCars`.
    let totalCars = cars.concat(moreCars)
    console.log(`total cars = ${totalCars}`)

// 3. `.indexOf()` and `.lastIndexOf()`
    //Use the `indexOf` method to console.log the index of `Honda` in `totalCars`.
    console.log(`the index of Honda is ${totalCars.indexOf('Honda')}`);


    //Use the `lastIndexOf` method to console.log the index of `Ford` in `totalCars`.
    console.log(cars.lastIndexOf('Ford'))
//    * Run the program.


// 4. `.join()`
    //Use the `join` method to convert the array `totalCars` into a string called `stringOfCars`.
    let stringOfCars = totalCars.join(', ');

    console.log(stringOfCars);
//    * Run the program.


// 5. `.split()`
    //Use the `split` method to convert `stringOfCars` into an array called `carsFromString`.
    let carsFromString = stringOfCars.split(', ')

    //Console.log the array you just created.
//    * Run the program.
//     > BONUS: Go back and pass a comma (`','`) in as an argument to `.split()` to separate the cars into individual items in the array. This is called a *separator* and it can be any character you wish to separate strings by.

// 6. `.reverse()`
//    * Use the `reverse` method to create an array `carsInReverse` which is the array `totalCars` in reverse.
    let carsInReverse = totalCars.reverse();
//    * Console.log `carsInReverse`.
    console.log(carsInReverse)
//    * Run the program.


// 7. `.sort()`
//    * Use the `sort` method to put the array `carsInReverse` into alphabetical order.
    carsInReverse.sort()
//    * Based on the types of cars you used, predict which item in the array should be at index 0.
    // BMW???
//    * Use the following code to confirm or reject your prediction: 
    console.log(carsInReverse.indexOf('BMW'));


// ***********************************************************

// 8. `.slice()`
//    * Create a `pets` array by copy/pasting the following: 
    const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
//    * Use the `slice` method to create a `reptiles` array with `snake` and `lizard` from the `pets` array.
    const reptiles = pets.slice(4, 6)
//    * Console.log the `reptiles` array and run the program.
    console.log(reptiles)
//    * Now console.log the `pets` array and run the program. Why do you think `snake` and `lizard` are still in the original array?
    console.log(pets)

//the slice() do not modify the original array. it returns a new array with the selected elements

// 9. `.splice()`
//    * Create a new array called `removedReptiles`, using the `splice` method to remove `snake` and `lizard` from the `pets` array.
    const removedReptiles = pets.splice(4,2)
//    * Console.log `removedReptiles` and `pets` and run the program.
    console.log(removedReptiles)
//    * Go back and add the string `'hamster'` in as a third parameter to your `splice` method, then run the program again and notice how the `pets` array has changed. Do you see how that works?
    pets.splice(4, 0, 'hamster')
    console.log(pets)


// 10. `.pop()`
//    * Use the `pop` method to remove the last item from the `pets` array, saving it to a variable called `removedPet`.
    const removedPet = pets.pop()
//    * Console.log `removedPet` and `pets` and run the program.
    console.log(removedPet)

// 11. `.push()`
//    * Use the `push` method to add `removedPet` back to the end of the `pets` array.
    pets.push('hamster')
//    * Console.log `pets` and run the program.
    console.log(removedPet)


// 11. `.shift()`
//    * Use the `shift` method to remove and console.log the first item in the `pets` array.
    pets.shift()
    console.log(pets)


// 12. `.unshift()`
//    * Use the `unshift` method to add the string `'turtle'` as the first item in the `pets` array.
    pets.unshift('turtle')
//    * Console.log the `pets` array and run the program. If all went according to plan, you should see `['turtle', 'cat', 'fish', 'rabbit', 'hamster', 'bird']`.
    console.log(pets)

// 13. `.forEach()`
//    * Create a numbers array by copy/pasting the following: `const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]`
    const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
//    * Write code that will add 2 to each item in the array `numbers`.
//       * `forEach` requires a function to be passed into it as its first argument.
//       * Build a function called `addTwo` that can take in num, index, and arr as parameters—`(num, index, arr)`—and returns `num + 2` at each `index` of the `arr`
    function addTwo(num, index, arr) {
        arr[index] = num + 2;
        //       * Use `.forEach()` on the `numbers` array, passing in your freshly built function `addTwo` as an argument, in order to add 2 to each number in the array. 
    }
    numbers.forEach(addTwo)
    //    * Console.log `numbers` and run the program.
    console.log(numbers)

