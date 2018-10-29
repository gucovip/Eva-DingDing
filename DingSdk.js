const axios = require('axios')
const {webhook} = require('./webhook.js')
module.exports = {
  dingSend(json){
    axios.post(webhook, json).then(ret => console.log(ret.data))
  },
    dingText(content, isAtAll = false) {
        axios.post(webhook, {
            'msgtype': 'text',
            'text': {
                'content': content
            },
            'at': {
                'isAtAll': isAtAll
            }
        }).then(ret => {
          console.log(ret.data)
        })
    },
    dingLink(title, content, messageUrl, picUrl = '') {
        axios.post(webhook, {
            'msgtype': 'link',
            'link': {
                'text': content,
                'title': title,
                'picUrl': picUrl,
                'messageUrl': messageUrl
            }
        })
    },
    dingMarkdown(title, content, isAtAll = false) {
        axios.post(webhook, {
            'msgtype': 'markdown',
            'markdown': {
                'title': title,
                'text': content
            },
            'at': {
                'isAtAll': isAtAll
            }
        })
    },
    dingWholeActionCard() {
        axios.post(webhook, {
            'actionCard': {
                'title': '乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身',
                'text': '![screenshot](@lADOpwk3K80C0M0FoA) \n #### 乔布斯 20 年前想打造的苹果咖啡厅 \n\n Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划',
                'hideAvatar': '0',
                'btnOrientation': '0',
                'singleTitle': '阅读全文',
                'singleURL': 'https://www.dingtalk.com/'
            },
            'msgtype': 'actionCard'
        })
    },
    dingPartActionCard() {
        axios.post(webhook, {
                'actionCard': {
                    'title': '乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身',
                    'text': '![screenshot](@lADOpwk3K80C0M0FoA) \n\n #### 乔布斯 20 年前想打造的苹果咖啡厅 \n\n Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划',
                    'hideAvatar': '0',
                    'btnOrientation': '0',
                    'btns': [
                        {
                            'title': '内容不错',
                            'actionURL': 'https://www.dingtalk.com/'
                        },
                        {
                            'title': '不感兴趣',
                            'actionURL': 'https://www.dingtalk.com/'
                        }
                    ]
                },
                'msgtype': 'actionCard'
            }
        )
    },
    dingFeedCard() {
        axios.post(webhook, {
            'feedCard': {
                'links': [
                    {
                        'title': '时代的火车向前开',
                        'messageURL': 'https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI',
                        'picURL': 'https://www.dingtalk.com/'
                    },
                    {
                        'title': '时代的火车向前开2',
                        'messageURL': 'https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI',
                        'picURL': 'https://www.dingtalk.com/'
                    }
                ]
            },
            'msgtype': 'feedCard'
        })
    }
}
