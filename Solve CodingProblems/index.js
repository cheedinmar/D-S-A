/**HOW TO SOLVE CODING PROBLEMS
 * Analytical skills: how you can think through the problems and analyze things
 * Coding skills: do you code well, by writing clean, simple organised and readable code?
 * Technical knowledge: do you know the fundamentals of the job you are applying for?
 * Communication skills: does your personality matches the companie's culture
 * 
 * In order to solve coding problems we need to learn these data structures and algorithm
 * Array, Stacks, Queues, Linked List, Trees, Tries, Graphs, Hash Tables
 * Sorting, Dynamic Programming, BFS + DFS (searching), Recursion
 * 
 * 
 * STEP BY STEP THROUGH A PROBLEM IN A CODING INTERVIEW
 * eg given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items
 * for eg:
 * const array1 =['a', 'b', 'c','x'];
 * const array2 = ['z','y','i']
 * should return false
 * -------------
 * const array 1 =['a','b','c','x'];
 * const array2 = ['z','y','x']
 * should return true
 * 
 * step 1: when the interviewer says the question write down the key points at the top(sorted arrays). make sure you have all the details, show how organised you are
 * 
 * step2: make sure you double check, what are the inputs and outputs
 * 2 parameters - arrays,
 * return true or false
 * 
 * step3: what is the most important value of the problem, do you have time, and space and memory, etc
 * you might want to ask the interviewer how large the array is ganna get
 * and is our main goal here to be efficient as possible in our function, what is more important time or space complexity
 * 2 paramtters- arrays- no size limit
 * return true or false
 * 
 * step4: don't be annoying and ask too many questions
 * 
 *  step5: start with the naive, brute force approach. first thing that comes to mind, it shows that you are able to think well and critically,
 * you don't even need to write this code, just speak about it
 * there is usually an easy naive solution which is called the brute force.
 * for this eg we can have a nested or loops one that will compare array1 to array 2 which is quadratic time 0(a*b) which is same as 0(n^2)
 * nested for loops is something we want to avoid during interviews
 * 
 * step6: Tell the interviewer why this approach is not the best eg (0(n^2), not efficient, not readable)
 * 
 * step7: walk through your approach, comment things and see where you may be able to break things, any repetition
 * 
 * what if we had a function that takes the first array and convert into an object that looks like this
 * array1 => obj {
 *      a: true,
 *      b: true,
 *      c: true,
 *      x: true
 *      }
 * now instead of having to loop through both arrays, just loop through only the second array amd simply check if the properties exist in this object we have created
 * array2[index] === obj.properties
 * 
 * step8: before we start coding, we wanna walk through your code and write down steps
 */ function containsCommonItems2(arr1, arr2){
    //loop through first array and create object where properties === items in the array
    //loop through second array and check if item in second array exists on created object
    //so we have two loops but they are not going to be nested therefore making it more efficient than our brute force approach
    //time complexity here is 0(a+b)
 }