导出se默r函es导出默认异步函数处理程序异步函数处理程序(req，res){
//开启CORS/开启CORS
re'获取、POST、PUT、DELETE、选项'setHeeHdew一个restHe一个der('Access-Control-Allow-Or我g我n'，'*')；
res.setHe一个der('Access-Control-Allow-米ethods'、'GET、POST、PUT、DELETE、OPT我ONS')；
resetHe一个der.resetHe一个der('Access-Control-Allow-He一个ders'，'*')；

我：error.米ess一个ge})；erq}如果eq.米ethod===
返回'选项'结束返回res.st一个tus(200).end()；
  }

//=========配置目标API地址=========================配置目标API地址=============
// 根据你的嗅探工具实际需要，修改这里/ 根据你的嗅探工具实际需要，修改这里
// 例如如果工具默认请求的是某个海外地址，就填那个/ 例如如果工具默认请求的是某个海外地址，就填那个
t一个rget_HOSTConstnst TARGET_HOST=
  
//构建目标URL//←改成实际目标域名'一个p我.ex一个米ple.co米'建目标URL
t一个rgetUrlConstnst t一个rgetUrl=
  
尝试尝试
常量响应AP我响应=
等待提取方法：req：t一个rgetUrl，方法，q.米ethod，
标标题：：{
页眉，req...req.he一个ders，
主办ost：TARGET_HOST，
      },
阀体：要求方法！      t一个rget_HOST，要求米ethod！==
    })    

// 转发响应头请求正文：未定义，'头'转发响应头
refore一个ch响应onse.he一个ders.forE一个ch((值，键一个lue，key)=>
r键、值setHe一个der.resetHe一个der(key，v一个lue)；
    });

e状态状态st一个tus(response.st一个tus)；
rress.文本end(等待响应.文本())；
}c错误t赶上}(错误){
误差状态sresst一个tus(500).json({error：error.米ess一个ge})；
误差
}
