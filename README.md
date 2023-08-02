# greenworkx 🌿

## My First approach step by step 
1. Take the inputs and stored them in an array. Please note that I haven't yet implemented the code for selecting each input from the form.
2. Transform the input scale (1 to 5) to the data scale (-1 to 1). For instance, if the user input is 1 (Not willing to do), it will be transformed to -1.
3. Calculating the difference between the input and data, ensuring that each difference is positive using the `Math.abs` method.
  A difference of 0 indicates a perfect match.
4. Mapping the difference to the corresponding match score, I've created the `getMatchScore()` function.
It returns scores based on specific ranges.
5. Calculate the average score, I sum up each score and divide by 3. I then return an object containing the job name and average score.
6. Display the result using the `displayResult()` function. Currently, the results are logged to the console for convenience. 
