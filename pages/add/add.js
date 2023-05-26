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
Page({
  data: {
    type: 2,
    acctTypes: []
  },
  onLoad: function () {
    this.requestData(this.data.type)
  },
  handleTab: function (event) {
    this.setData({
      type: event.currentTarget.dataset.type
    });
    this.requestData(this.data.type)
  },
  requestData(type) {
    wx.request({
      url: 'http://127.0.0.1:3000/graphql',
      method: 'POST',
      header: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      data: JSON.stringify({
        query,
        variables: {
          type
        }
      }),
      success: (res) => {
        this.setData({
          acctTypes: res.data.data.acctTypes.sort((a, b) => a.sort - b.sort)
        })
      }
    })
  },
})