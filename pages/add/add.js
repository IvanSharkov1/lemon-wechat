import {
    getAcctTypes
} from './request'
import {
    Api
} from '../../api/index'

var app = getApp()



var mutation = `
mutation AddLedgerDetail($newLedgerDetailData: NewLedgerDetailInput!){
    addLedgerDetail(
      newLedgerDetailData: $newLedgerDetailData
    ) {
      id
      acctTypeId
      amount
      remark
      createTime
      updateTime
    }
  }
`

Page({
    data: {
        type: 2,
        selectedId: -1,
        acctTypes: [],
        bottomSafeHeight: 0,
        money: 0,
        remark: "",
    },
    onLoad: function () {
        getAcctTypes.call(this, this.data.type);
        this.setData({
            bottomSafeHeight: app.globalData.bottomSafeHeight
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
    },
    handleKeyboard: function (event) {
        var keyValue = event.currentTarget.dataset.value
        if (typeof keyValue === 'number' || keyValue === '+' || keyValue === '-' || keyValue === '.') {
            this.setData({
                money: keyValue
            })
        }
        if (keyValue === 'btn-delete') {

        }

        if (keyValue === '再记') {

        }
        if (keyValue === '保存') {
            const saveData = {
                acctTypeId: this.data.selectedId,
                amount: "123",
                remark: this.data.remark,
            }

            wx.request({
                url: 'http://127.0.0.1:3000/graphql',
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    query: `
                    mutation AddLedgerDetail($newLedgerDetailData: NewLedgerDetailInput!){
                        addLedgerDetail(
                          newLedgerDetailData: $newLedgerDetailData
                        ) {
                          id
                          acctTypeId
                          amount
                          remark
                          createTime
                          updateTime
                        }
                      }
                    `,
                    variables: {
                        newLedgerDetailData:{
                            ...saveData
                        }
                    }
                }),
                success: (res) => {
                    console.log(res.data)
                },
            })

        }
    },

})