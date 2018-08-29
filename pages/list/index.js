// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sd_dgdf: [{
      name: "综合",
      id: 0,
      cls: "act"
    }, {
      name: "最热",
      id: 1,
      cls: ""
    }, {
      name: "新品",
      id: 2,
      cls: ""
    }]
  },

  dsf_sddfg(e) {
    let idx = e.currentTarget.dataset.idx,
      sd_dgdf = this.data.sd_dgdf
    sd_dgdf.map(a => {
      a.cls = ""
    })
    sd_dgdf[idx].cls = "act"
    this.setData({
      sd_dgdf: sd_dgdf
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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