// pages/star/index.js
import base from "../../utils/base.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  }, 
 
  /** 
   * 生命周期函数--监听页面加载 
   */ 
  onLoad: function(options) {
    this.getUserInfo()
  },
  getUserInfo() {

    wx.login({
      success: function(code) {
        console.log(code) 
        wx.getUserInfo({
          success: function(res) {
            base.ajax("wx_load", {
              code: code.code,
              openid: res.rawData
            }, function(data) {
              let opsd_de = JSON.parse(data)
       
              wx.setStorageSync('x_login', res.userInfo)
              wx.setStorageSync('openid', opsd_de.openid)
              wx.switchTab({
                url: '/pages/index/index'
              })
            })

          }
        })
      }
    })
  },
  tiaozhuaner() {





  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})