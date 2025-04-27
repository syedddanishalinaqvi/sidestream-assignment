export default (birthdate: Date) => {
  const today = new Date();
  const birthdateObj=new Date(birthdate);
  // const differenceInMilliseconds = today.getTime() - birthdate.getTime() The birthdate we are getting from Faker is in String format not in Data format. 
  const differenceInMilliseconds = today.getTime() - birthdateObj.getTime()
//Using Math.max to get the 1 if it is a new born.
  return Math.max(1,Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))) 
}
