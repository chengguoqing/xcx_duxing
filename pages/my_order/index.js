// pages/my_order/index.js
import base from "../../utils/base.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_list:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let openid = wx.getStorageSync('openid')
    let get_cp_sd={},
    th=this
    get_cp_sd.openid = openid
    base.ajax("get_cp_sd", get_cp_sd, function(data) {
      data.data.map(a=>{
        a.mtime = base.time_er(a.add_time)
      })
      th.setData({ order_list: data.data})
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