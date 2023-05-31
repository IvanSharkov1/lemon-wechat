import {
  getAcctTypes
} from './request'

var app = getApp()

Page({
  data: {
    type: 2,
    selectedId: -1,
    acctTypes: [],
    bottomSafeHeight: 0
  },
  onLoad: function () {
    getAcctTypes.call(this, this.data.type);
    this.setData({
      bottomSafeHeight : app.globalData.bottomSafeHeight
    });
  },
  handleTab: function (event) {
    this.setData({
      selectedId: -1,
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