const schedule = require('node-schedule')
const {dingText, dingLink} = require('./DingSdk.js')

dingText('Eva自动打卡提醒已启动~，将在每天上午的8点30分提醒大家！')
dingLink('更新提醒', '1、提醒规则修改，上午8点45分到上午8点55分每隔5分钟提醒一次；2、去除24小时报时，加入6小时一次的心跳；3、新增DingSdk。', 'https://github.com/raiyeeeric/Eva-DingDing', 'https://raw.githubusercontent.com/eva-org/eva-core/master/icon.png')

schedule.scheduleJob('0 45 8 * * *', function () {
    const exportDay = [0, 6]
    const todayOfWeek = new Date().getDay()
    if (exportDay.includes(todayOfWeek)) return
    dingText('现在是上午8点45分，请记得打开哦！', true)
})
schedule.scheduleJob('0 50 8 * * *', function () {
    const exportDay = [0, 6]
    const todayOfWeek = new Date().getDay()
    if (exportDay.includes(todayOfWeek)) return
    dingText('现在是上午8点50分，请记得打开哦！', true)
})
schedule.scheduleJob('0 55 8 * * *', function () {
    const exportDay = [0, 6]
    const todayOfWeek = new Date().getDay()
    if (exportDay.includes(todayOfWeek)) return
    dingText('现在是上午8点55分，请记得打开哦！', true)
})
schedule.scheduleJob('0 0 * * * *', function () {
    if (new Date().getHours() % 6 === 0) {
        dingText('Eva整点报时，现在时间是' + new Date().getHours() + ':00:00！很高兴为您服务！')
    }
})
