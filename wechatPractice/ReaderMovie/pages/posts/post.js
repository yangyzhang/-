var postsData = require('../../data/posts-data.js')
Page({
  data:{
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.setData({
    posts_key : postsData.postList
  });
  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: './post-detail/post-detail'
      
    }),
    console.log(postId);
  }
})


