import {
    Api
} from '../../api/index'

import {
    Add
} from './operation'

var query = `
query DetailCategories($detailType: Int!) {
    detailCategories(detailType: $detailType) {
    id
    sort
    detailType
    icon
    iconName
  }
}
`


async function detailCategories(detailType) {

    const res = await Api(query, {
        detailType
    })
    this.setData({
        detailCategories: res.detailCategories.sort((a, b) => a.sort - b.sort)
    })
}

module.exports = {
    detailCategories
}