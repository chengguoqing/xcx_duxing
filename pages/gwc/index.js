// pages/gwc/index.js 
import base from "../../utils/base.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    weixin: "",
    xuqiu: ""
  },
  getphone(e) {
    this.setData({
      phone: e.detail.value
    })

  },
  getweixin(e) {
    this.setData({
      weixin: e.detail.value
    })

  },
  getxuqiu(e) {  
    this.setData({
      xuqiu: e.detail.value
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  fabuxyq() {
    let xuqiu = {}
    xuqiu.phone = this.data.phone
    xuqiu.weixin = this.data.weixin
    xuqiu.xuqiu = this.data.xuqiu
    xuqiu.user_id = wx.getStorageSync('openid')
    base.ajax("add_xuqiu", xuqiu, function(data) {
      wx.showModal({
        title: '提示',
        content: '添加成功',
        success: function(res) {
          if (res.confirm) {

          }
        }
      })

    })
    wx.showModal({
      title: '提示',
      content: '发布成功！可否添加个微信？',
      success: function(res) {
        if (res.confirm) {
          wx.previewImage({
            urls: ["http://duxinggj-2018-1251133427.cosgz.myqcloud.com/erweima.jpg"] // 需要预览的图片http链接列表
          })

        }
      }
    })
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