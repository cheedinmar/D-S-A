// Big O can tell us how well a problem is solved
/**
 What is a good code?
 Good code can be described in two points
 1. Readability: is your code generally clan and can others understand your code.
 2. Scalability: Big O notation is what allows us to measure scalability. 
    Code that can scale. 
    We give our computer instructions through code and our machine provides an output from the instruction. for eg*/

    const nemo =['nemo']
    //let us use a bigger array 
    const everyone =['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel','squirt','darla', 'hank']
    const large = new Array(1000000).fill('nemo')
  function findNemo(array){
      let t0 = performance.now();
        for (let i=0; i < array.length; i++){
            if(array[i] ==='nemo'){
                console.log('found Nemo')
            }
        }
        let t1 = performance.now()
        console.log( 'call to find Nemo' + (t1-t0) + ' milliseconds')
    }
    // findNemo(large); 
    //this is an instruction given to the computer.
    /*
    How long does it take the computer to solve this problem, how can we measure the Big O or the efficiency and performance of the code
    when the array becomes longer
    javascript gives us a tool to measure the runtime called performance.now()
    we notice as the length of the array increases, the runtime increases and takes a longer time to process the function

    Big O is the language we used for talking an algorthm takes to long. And to know which is better when it comes to scale regardless of our computer differences
    Big O and scalability of code simply means when we grow bigger and bigger in input, how much does the algorithm and function slows down.
    Different functions have different Big O complexity
    */

    /**          O(n)
     * What is the Big O of the function findingNemo
     * if the number of elements increases, to the number of times the operation runs also increases linearly,
     * we said that the findingNemo function has a big O notation 0(n) ==> linear time
     * n simply means the big O depends on the number of inputs

    * 
                O(1)
    eg1 function compressFirstBox(boxes){
        console.log(boxes[0]) 0(1)
    }
    what is the big O of this function and how many steps does this function take when the boxes increasing 0-100
    This is called the CONSTANT TIME. O(1). No matter the number of boxes, we are just doing one operation and grabbing the first item in the array.
    
    eg 2 function LogFirstTwoBoxes(boxes){
        console.log(boxes[0]);  0(1)
        console.log(boxes[1]);  0(1)
    }
    what is the big O of this function and how many steps does this function take when the boxes increases
    since we have two 0(1),therefore logFirstTwoBoxes(boxes) = 0(2). No matter how big the number of boxes are, the operation only runs twice.
    We round it down to 0(1). It is still a flat line on the graph. In terms of scalability it does not matter how big our inputs are, it always going to take the same amount of time
     */

    // Exercises
        function funChallenge(input) {
        let a = 10; //0(1)
        a = 50 + 3; //0(1)

        for (let i = 0; i < input.length; i++) { //0(n)
            anotherFunction(); //0(n)
            let stranger = true; //0(n)
            a++; //0(n)
        }
        return a; //0(1)
        }
        //0(3 +4n) therefore the function is 0(n)
    function anotherFunChallenge(input) {
      let a = 5;
      let b = 10;
      let c = 50;
      for (let i = 0; i < input; i++) {
        let x = i + 1;
        let y = i + 2;
        let z = i + 3;
      }
      for (let j = 0; j < input; j++) {
        let p = j * 2;
        let q = j * 2;
      }
      let whoAmI = "I don't know";
    }

    //Rule Book when calculating Big O
    /** 
     *  Rule 1: Worst Case
     * When it comes to big O, although you can write efficient code like to break a loop when item is found in an array,
     * Big O only cares about the worst case, like the item you are finding is at the end of the array.
     * We always care about the worst case scenerio in Big O 
     * 
     * Rule 2 : Remove constants
     * Drop unnecessary constant, Big O does not really care about 0(1 + n/2 + 100)
     * so this becomes 0(n + 1) therefore 0(n)
     * 
     * Rule 3: Different terms for inputs
        for eg*/ function compressBoxesTwice (boxes, boxes2){
            boxes.forEach((box)=>{
                console.log(box)
            });
            boxes2.forEach((box)=>{
                console.log(box)
            })
        }
        /**this functions has two inputs that could different number of items in an array 
         * therefore we give different notations for different inputs
         * The big O of this notation is 0(a+b)
         * 
         * 
         * 0(n^2) 
         * log all pairs*/
        const boxes = ['a', 'b', 'c', 'd', 'e', 'f']
        function logAllPairsOfArray(array){
            for (let i=0; i <array.length; i++){
                for(j=0; j < array.length; j++){
                    console.log(array[i], array[j]);
                }
            }
        }

        /**for nested loops we use multiplication
         * 0(n * n) = 0(n^2) => Quadratic time
         * everytime the number of elements increase, lets say we have 2 elements, then we have 4 operations to do,
         * if we have 3 elements, then we have 9 operations to do
         * 
         *   
         * Rule No 4: Drop non-dominants
         * for eg */  function printAllNumbersThenAllPairSum(numbers){
            console.log('these are the numbers')
            numbers.forEach(function(number){
                console.log(number)
            })
            console.log('these are the suums')
            numbers.forEach(function (firstNumber){
                numbers.forEach(function(secondNumber){
                    console.log(firstNumber + secondNumber);
                })
            })
         }
         /**The big O is 0(n+ n^2) 
          * so we want to drop the non dominant, we care about the most important term therefore
          * 0(n^2)
          * 
          * 
          * 0(n!) factorial- you are adding a loop for every element
         */