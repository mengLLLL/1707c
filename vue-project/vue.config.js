const data = [
    {
      type: 'pending', // 1:进行中，2：强行终止，3：已完成
      class: 1, // 1：日常工作，2：专项工作，3：临时工作
      score: 1,
      people: ['张雪强', '梁子轩'],
      startTime: '2019-12-3',
      endTime: '2019-12-3',
      title: '客户经理掌上宝测试'
    },
    {
      type: 'reject', // 1:进行中，2：强行终止，3：已完成
      class: 2, // 1：日常工作，2：专项工作，3：临时工作
      score: 2,
      people: ['张雪强', '梁子轩'],
      startTime: '2019-12-3',
      endTime: '2019-12-3',
      title: '客户经理掌上宝测试'
    },
    {
      type: 'fullfilled', // 1:进行中，2：强行终止，3：已完成
      class: 1, // 1：日常工作，2：专项工作，3：临时工作
      score: 3,
      people: ['张雪强', '梁子轩'],
      startTime: '2019-12-3',
      endTime: '2019-12-3',
      title: '资料整理'
    },
    {
      type: 'fullfilled', // 1:进行中，2：强行终止，3：已完成
      class: 1, // 1：日常工作，2：专项工作，3：临时工作
      score: 3,
      people: ['张雪强', '梁子轩'],
      startTime: '2019-12-3',
      endTime: '2019-12-3',
      title: '易懂'
    },
  ]
module.exports = {
    devServer: {
        before: function(app) {
            app.get('/api/list', (req, res) => {
                res.send({
                    data
                })
            })
        }
    }
}