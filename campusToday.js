var my = {}
my.appName = "今日校园"
my.isSubmit = true
my.jsWriter = "jessewalker" 

console.show();
auto.waitFor();
log("正在执行脚本");
//开始
if (launchApp(my.appName)) {
    log("打开 app 等待进入主页...");
    // 进入辅导员通知
    while (1) {
        var counselor = text("辅导员通知").findOne(3000);  // 超时时间3000毫秒，若超时则返回null
        while (!counselor) {
            text("讯息").findOne(30000).parent().parent().click(); // 30秒都打不开一个软件就换手机吧 ！！！
            counselor = text("辅导员通知").findOne(3000);
        };
        if (counselor.parent().parent().parent().click()) {
            log("进入辅导员通知成功...");
            break;
        };
    };
    //  进入每日打卡
    if (textContains("未填写").findOne(40000).parent().parent().parent().click()) {
        log("进入信息收集成功");
        log("等待界面加载...");
        descContains("确认已认真查看，且填写信息无误").findOne(40000).click();
        log("等待提交表单...");
        sleep(5000);
        // 未完成代码 需要提交俩次
        // descContains("提交").findOne(20000).click();
    }
} else {
    log("打开APP失败")
}