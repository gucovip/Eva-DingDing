const schedule = require('node-schedule')
const {dingText, dingLink, dingSend} = require('./DingSdk.js')

// dingLink('更新提醒', '1、修改错别字；2、重构代码。', 'https://github.com/raiyeeeric/Eva-DingDing', 'https://raw.githubusercontent.com/eva-org/eva-core/master/icon.png')

schedule.scheduleJob('0 45 8 * * *', function () {
    const exportDay = [0, 6]
    const todayOfWeek = new Date().getDay()
    if (exportDay.includes(todayOfWeek)) return undefined
    dingText(`现在是上午8点${now.getMinutes()}分，请记得打卡哦！`, true)
})

schedule.scheduleJob('0 50 8 * * *', function () {
    const exportDay = [0, 6]
    const todayOfWeek = new Date().getDay()
    if (exportDay.includes(todayOfWeek)) return undefined
    dingText(`现在是上午8点${now.getMinutes()}分，请记得打卡哦！`, true)
})

schedule.scheduleJob('0 55 8 * * *', function () {
    const exportDay = [0, 6]
    const todayOfWeek = new Date().getDay()
    if (exportDay.includes(todayOfWeek)) return undefined
    dingText(`现在是上午8点${now.getMinutes()}分，请记得打卡哦！`, true)
})

schedule.scheduleJob('0 0 * * * *', function () {
    if (new Date().getHours() % 6 === 0) {
        dingText('Eva整点报时，现在时间是' + new Date().getHours() + ':00:00！很高兴为您服务！')
    }
})
