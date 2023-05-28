import {
  Api
} from '../../api/index'

import {Add} from './operation'

var query = `
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


async function getAcctTypes(type)  {
  const res = await Api(query, {
    type
  })
  this.setData({
    acctTypes: res.acctTypes.sort((a, b) => a.sort - b.sort)
  })
}

module.exports = {
  getAcctTypes
}