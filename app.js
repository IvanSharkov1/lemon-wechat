// app.js
App({
    globalData: {
        bottomSafeHeight: 0
    },
    onLaunch: function () {
        try {
            const res = wx.getSystemInfoSync()
            this.globalData.bottomSafeHeight = res.screenHeight - res.safeArea.bottom
        } catch (e) {
            console.log(e)
        }
    }
})