Page({
  data: {
    val : '',
    msglist : []
  },
  changeInput : function(ev){
    //console.log(ev.detail.value);
    this.setData({
      val: ev.detail.value
    })
  },
  deletemsg : function(ev){
     var idx = ev.target.dataset.index;
     var list = this.data.msglist;
     list.splice(idx,1);
     this.setData({
       msglist: list
     });

     wx.setStorage({
       key: 'msglist',
       data: list
     })
  },
  addmsg : function(){

    if (!this.data.val){return;}

    var list = this.data.msglist;
    list.push(this.data.val);
    this.setData({
      msglist : list,
      val : ''
    });

    wx.setStorage({
      key: 'msglist',
      data: this.data.msglist
    })
  },

  onReady : function(){
     var self = this;
     wx.getStorage({
        key: 'msglist',
        success: function(res) {
          self.setData({
            msglist: res.data
          }); 
       },
     });

     
  }
})
