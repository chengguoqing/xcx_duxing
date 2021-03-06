// pages/user_center/index.js
import base from "../../utils/base.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [ //轮播图
      'http://duxinggj-2018-1251133427.cosgz.myqcloud.com/banne.jpg',
      'http://duxinggj-2018-1251133427.cosgz.myqcloud.com/banner.jpg',
      'http://duxinggj-2018-1251133427.cosgz.myqcloud.com/banner_er.jpg',
      'http://duxinggj-2018-1251133427.cosgz.myqcloud.com/banner_san.jpg',
      'http://duxinggj-2018-1251133427.cosgz.myqcloud.com/banner_si.jpg',
      'http://duxinggj-2018-1251133427.cosgz.myqcloud.com/banner_wu.jpg'

    ],
    t_sd_fert: [{
      icon: "/img/pc.png",
      name: "pc",
      cls: ""
    }, {
      icon: "/img/phone.png",
      name: "phone",
      cls: "ab"
    }, {
      icon: "/img/app.png",
      name: "app",
      cls: "ac"
    }],
    cp: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let th = this,
      get_cp_w = {}
    get_cp_w.is_index = 1
    console.log()
    base.ajax("get_cp_w", get_cp_w, function(data) {
      
      th.setData({ 
        cp: data.data
      })
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