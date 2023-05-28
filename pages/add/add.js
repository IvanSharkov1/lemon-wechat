import {
  getAcctTypes
} from './request'

Page({
  data: {
    type: 2,
    selectedId: -1,
    acctTypes: []
  },
  onLoad: function () {
    getAcctTypes.call(this, this.data.type)
  },
  handleTab: function (event) {
    this.setData({
      type: event.currentTarget.dataset.type
    });
    getAcctTypes.call(this, this.data.type)
  },
  handleTab2: function (event) {
    this.setData({
      selectedId: event.currentTarget.dataset.id
    })
  }
})