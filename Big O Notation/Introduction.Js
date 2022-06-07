// Big O can tell us how well a problem is solved
/**
 What is a good code?
 Good code can be described in two points
 1. Readability
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