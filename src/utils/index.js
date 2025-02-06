export const getEnvVariable = (key) => { 
  
  const value = process.env[key.toUpperCase()] || process.env[key.toLowerCase()] 
  if(!value){
    throw new Error(`Envinronment variable ${key} not set. App will not start. Please set and restart`)
  }
  if(value.toLowerCase() === "false" ){
    return false
  }
  if(value.toLowerCase() === "true" ){
    return true
  }
  return value
}
