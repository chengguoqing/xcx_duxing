import base from "../../../utils/base.js"
Component({
  created() {
    let th=this
    base.ajax("get_user", {}, function(data) {
     console.log(data)
      th.setData({ mh_df: data.data[0]})
    },'get')


  },
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
    mh_df:""

  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function() {

    },
    poda_d(e) {
  
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.phone//仅为示例，并非真实的电话号码
      })
    }
  }
})