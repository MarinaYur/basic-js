module.exports = function createDreamTeam(members) {
  let name = '';
  if (Array.isArray(members)) {
  members.forEach(item => {
    if (typeof item === 'string') {      
      name += item.trim().charAt(0).toUpperCase();
    }
  })
  return name.split('').sort().join('');
  }
  return false;
  // throw 'Not implemented';
  // remove line with error and write your code here
};