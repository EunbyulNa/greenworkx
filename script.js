
const data = require('./data');

const getScoredUserJobMatches = (willingnessToWorkOutdoors, willingnessToLearnHandsOnSkills, willingnessToWorkWithTechnology, currentAnnualSalaryEquivalent) => 
{
  //0. take inputs
  const inputs = [ willingnessToWorkOutdoors,willingnessToLearnHandsOnSkills, willingnessToWorkWithTechnology ]
 
 //1. transform the input scale (1 to 5) to the data scale (-1 to 1).
  const newInputs = inputs.map((input)=> {
   return (input - 3) / 2 
 })

 //4. Get the score depends on the difference 
 const getMatchScore = (diff) => {
   if(diff === 0){
    return 100
   }else if(diff > 0 && diff < 0.4){
    return 80
   }else if(diff >= 0.4 && diff < 0.8){
    return 70
   }else if(diff >= 0.8 && diff < 1.2){
    return 10
   }else{
    return 0
   }
 }

//2. Difference between inpt and data

const dataDiff = data.map((job)=> {
    const diffOutdoorsExtent =  Math.abs(newInputs[0] - job.outdoorsExtent)
    const diffHandsOnExtent =   Math.abs(newInputs[1] - job.handsOnExtent)
    const diffTechnologyExtent =  Math.abs(newInputs[2] - job.technologyExtent)

    //3. Difference to the coresponding match score 

    const matchScoreOutDoor = getMatchScore(diffOutdoorsExtent)
    const matchScoreHands= getMatchScore(diffHandsOnExtent )
    const matchTech = getMatchScore(diffTechnologyExtent )

   
    //5. Get the average 
    const resultAverage = (matchScoreOutDoor + matchScoreHands + matchTech) / 3 
    
    //6. Return average, and job name 
    return {
        jobName: job.name,
        averageScore : resultAverage
    }


})

//7. Sort the jobs in desending order, and show top three

dataDiff.sort((a,b) => b.averageScore - a.averageScore)
const topThree = dataDiff.slice(0,3)

return topThree

}

//8. Display the result
const displayResult = (userJobs) => {
    userJobs.forEach((job, index) => {
      // Format the average score as a percentage
      const formattedScore = Math.round(job.averageScore)
      console.log(`You are a good match with '${job.jobName}' with this score ${formattedScore}%`);
    });
  };
  
  const userJobs = getScoredUserJobMatches(1, 1, 3);
  displayResult(userJobs);

