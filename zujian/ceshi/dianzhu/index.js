Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {

    },

  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function() {

    },
    poda_d() {
      wx.makePhoneCall({
        phoneNumber: '13538190372' //仅为示例，并非真实的电话号码
      })
    }
  }
})