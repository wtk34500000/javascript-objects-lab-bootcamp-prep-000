var recipes = new Object ({})

function updateObjectWithKeyAndValue (object, key, value)
{
  return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndVakye(object, key, value)
{
  object[key]= value
  return object
}