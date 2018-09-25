// pages/xiangqing/xiangqing.js
import base from "../../utils/base.js"
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    cp: ""
  },

  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let der_er = options.id_x
    let th = this,
      get_cp_w = {}
    get_cp_w.id = der_er
    base.ajax("get_cp_w", get_cp_w, function(data) {

      data.data[0].xiangqing = data.data[0].xiangqing.split(",")
      console.log(data.data[0])
      th.setData({
        cp: data.data[0]
      })
    })



    wx.showShareMenu({
      withShareTicket: false
    })




  },
  lijigm(e) { //立即购买
    let openid = wx.getStorageSync('openid')
    let qianming = {}, 
      cp = this.data.cp
    qianming.jiner = e.currentTarget.dataset.jiner
    qianming.openid = openid

    base.ajax("qianming", qianming, function(data) {
      let sd_Dert = data
      sd_Dert.success = function() {
        let gm_cp_sd = {}
        gm_cp_sd.title = cp.title 
        gm_cp_sd.fengmian = cp.fengmian
        gm_cp_sd.jiner = cp.jiner
        gm_cp_sd.openid = openid

        base.ajax("gm_cp_sd", gm_cp_sd, function(data) {
          wx.navigateTo({
            url: '/pages/my_order/index'
          })
        })
      }

      wx.requestPayment(data)
    }, 'get')
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
  onShareAppMessage: function(res) {

    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {

      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/pages/xiangqing/xiangqing',
      success: function(res) {
        console.log("成功")
      },
      fail: function(res) {
        console.log("失败")
      }


    }

  }
})