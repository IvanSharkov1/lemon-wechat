 const acctTypeQuery = `
  query AcctType($type: Int!) {
    acctTypes(type: $type) {
      id
      sort
      type
      icon
      iconName
    }
  }
  `


 module.exports.Add = {
     acctTypeQuery
 }