import {
    detailCategories
} from './request'
import {
    Api
} from '../../api/index'

var app = getApp()

Page({
    data: {
        detailType: 2,
        selectedId: -1,
        detailCategories: [],
        bottomSafeHeight: 0,
        money: 0,
        remark: "",
    },
    onLoad: function () {
        detailCategories.call(this, this.data.detailType);
        this.setData({
            bottomSafeHeight: app.globalData.bottomSafeHeight
        });
    },
    handleTab: function (event) {
        this.setData({
            selectedId: -1,
            detailType: event.currentTarget.dataset.detailType
        });
        detailCategories.call(this, this.data.detailType)
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
                detailCategoryId: this.data.selectedId,
                detailType: this.data.detailType,
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
                          detailCategoryId
                          detailType
                          amount
                          remark
                          createTime
                          updateTime
                        }
                      }
                    `,
                    variables: {
                        newLedgerDetailData: {
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