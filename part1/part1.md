1. It'll print out the value of "i", which despite being declared in a for loop is usable because of the "var" keyword.

2. It'll print out the value of "discountedPrice", which despite being declared in a for loop is usable because of the "var" keyword.

3. It'll print out the value of "finalPrice", which was properly declared in the same block as the console.log() call.

4. The function will print out **3** (length of the prices array), then **150** (last discounted price), then **150** (said price rounded to the nearest 1/100) again. The function would return the array **[50,100,150]**.

5. It'll have an error because "i"'s scope is limited to the for loop (having been declared with "let"), so its value can't be printed outside of the for loop.

6. It'll have an error because "discountedPrice"'s scope is limited to the for loop (having been declared with "let"), so its value can't be printed outside of the for loop.

7. It'll print out the value of "finalPrice" because it was decleared in the same block as the console.log() call.

8. If the variable assignments were successful, it would return the same thing as in Q4 because the "discounted" array was declared at the beginning of the function and its scope is the entire function.

9. It'll have an error because "i"'s scope is limited to the for loop (having been declared with "let"), so its value can't be printed outside of the for loop.

10. It'll have an error because "discountedPrice"'s scope is limited to the for loop (having been declared with "const"), so its value can't be printed outside of the for loop. The "const" keyword has the same scop rules as "let".

11. It'll print out 0 because "finalPrice" is a constant and cannot be reassigned.

12. If the variable assignments were successful, it would return the same thing as in Q4 because const arrays can still be pushed to, it just can't be reassigned or redeclared.

13. 
    1.  student.name
    2.  student["Grad Year"]
    3.  student.greeting()
    4.  student["Favorite Teacher"].name
    5.  student.courseload[0]

14. 
    1.  '32'; the single quotes around the first operand specify that it is a string to be appended to
    2.  '1'; although the first operand has single quotes around it, the - operator isn't used for strings so it is assumed that the first operand is in fact a number
    3.  3; since the first operand is just a number, null is converted to a number (zero)
    4.  '3null'; since the first operand is a string, null is interpreted as the string "null" 
    5.  4; the + operator isn't used for booleans, so since the second operand is a number, the boolean is converted to a number (one)
    6.  0; without single or double quotes on any of the operands, the default purpose of the + operator is to add two numbers together, so false and null are both converted to a number (zero)
    7.  '3undefined'; the double quotes cause the + to mean string concatenation, so undefined is converted to the string "undefined"
    8.  NaN; - can only be a numerical operator, so undefined is converted to NaN, which causes the result of any artihmetic operation to be NaN as well

15. 
    1.  true; the two values are of different types, so they're all converted to numbers, leading to '2' becoming 2 (with 2 > 1 returning true)
    2.  false; both values are strings, so they're compared by dictionary order (and '1' comes before '2' in unicode)
    3.  true; again, the two values are of different types, so they're all converted to numbers (and 2 does, in fact, equal 2)
    4.  false; the strict equality operator === doesn't cause type conversion, so the comparison returns false because the number 2 is different from the string '2'
    5.  false; converting the boolean true to a number results in the comparison 1 == 2, which returns false
    6.  true; Boolean(2) converts the number 2 to the boolean true because all non-zero numbers correspond to true

16. The == operator allows for conversion of data types when the two operands are of different data types, whereas the === operator requires both operands to ultimately be of the same data type to have the possibility of returning true. Neither require both operands to be writted exactly the same, only to have equivalent values, which is why `true === Boolean(2)` still works.

17. The code snippet prints out `How are you?`. The first if statement's condition is false because even converting the operands to the same data type, it ends up with the comparison 2 == 1, which is obviously false. The second if statement's condition only has a single value, so that value is assumed to be a boolean and converted to one; Boolean(2) is equivalent to true, so the code `console.log('How are you?');` in the second if statement is executed.

18. see part1-question18.js

19. Lines 4-6 are equivalent to `newArr.push(doSomething(array[i], function(x) { return x * 2; })`. The function call `doSomething(array[i], function(x) { return x * 2; }` returns `function(array[i] + 2)`, which itself returns `(array[i] + 2) + 2`. This is done for every index in the original array, so the resulting array will be the same as the original array, except that each value will have 2 added to it and the result will be multiplied by 2. (1 + 2) * 2 = 6, (2 + 2) * 2 = 8, and (3 + 2) * 2 = 10, so the function call `modifyArray([1,2,3], doSomething)` will return the array [6,8,10].

20. see part1-question20.js

21. see below:
   
`1`
`4`
`3`
`2`