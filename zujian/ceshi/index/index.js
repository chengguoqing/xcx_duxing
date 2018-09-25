import base from "../../../utils/base.js"
Component({
  created() {
    let th = this
    base.ajax("get_user", {}, function (data) {
     
      th.setData({ imgUrls: data.data[0].banner.split(",") })
    }, 'get')


  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    },
    imgUrls:{
      type: Array,
      value: 'default value',
    }
  }, 
  data: {
    // 这里是一些组件内部数据
    someData: {

    },
    imgUrls:"",
    mh_df:"",
    indicatorDots: true, //是否显示点点
    autoplay: true, //自动播放
    active_color: "#fff", //点选中的颜色
    indicator: "#B4B4B4", //点的颜色
    interval: 5000,
    duration: 500,
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})