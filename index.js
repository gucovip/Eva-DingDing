const axios = require('axios')
const schedule = require('node-schedule')
const {webhook} = require('./webhook.js')
const sendDing = function(content, isAtAll = false){
  axios.post(webhook, {
     "msgtype": "text",
     "text": {
         "content": content
     },
     "at": {
         "isAtAll": isAtAll
     }
 })
}
sendDing('Eva自动打卡提醒已启动~，将在每天上午的8点30分提醒大家！')

schedule.scheduleJob('0 30 8 * * *', function(){
  alertTime()
})
schedule.scheduleJob('0 0 * * * *', function() {
  sendDing('Eva整点报时，现在时间是' + new Date().getHours() + ':00:00！')
})
