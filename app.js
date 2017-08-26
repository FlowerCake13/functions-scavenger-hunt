  var a = 24;
  var b = 9;
  var hour = 60;
  var quarter = 4;
  var array = [2,4,5,199,39,12,1];
  var count = 9;

  var car = {
    wheels: 4,
    passengers: 4,
    mileage: 20300,
    cost: 49928
  }

  var spaceship = {
    wheels: 18,
    rooms: 21,
    passengers: 29909394895803589193049389,
    cost: 0
  }

  var objectArray = [car, spaceship];

  //PART I

  //Function 1
  //Create a function that takes in variables a and b, then divides them by 11.
  function function1(a, b){
    console.log((a + b) / 11);
  }

  function1(a, b);


  //Function 2
  //Create a function that will console.log a value of 18.
  function function2(){
    console.log(18);
  }

  function2();

  //Function 3
  //Create a function that will console.log the last element of the array by accessing the value from the array.
  function function3(){
    console.log(array[6]);
  }

  function3();

  //Function 4
  //Create a function that can divide hours by quarters, then add 10 to that result.
  function function4(){
    console.log(hour / quarter + 10);
  }

  function4();

  //Function 5
  //Create a function that will multiply the 2nd and 3rd element from the array, then subtract 5 from that result.
  function function5(){
    console.log(array[1] * array[2]- 5);
  }

  function5();

  //Function 6
  //Create a function that will subtract the number of car wheels from the number of spaceship wheels.
  function function6(){
    console.log(spaceship.wheels - car.wheels);
  }

  function6();

  //PART II

  //Function 7
  //Create a function and using a for loop, iterate through the array. In this loop, increment the count of the variable count.
  function function7(){
    for (var i = 0; i < array.length; i++) {
      count++
    }
    console.log(count)
  }

  function7();

  //Function 8
  //Create a function and using a for loop, iterate through the objectArray. In this loop, increment the count of the passengers for the 1st element in the objectArray.
  function function8(){
    for (var i = 0; i < objectArray.length; i++) {
      objectArray[0].passengers++
    }
    console.log(objectArray[0].passengers)
  }

  function8();

  //Function 9
  //Create a function that adds the 1st and 6th element of the array.
  function function9(){
    console.log(array[0] + array[5])
  }

  function9();