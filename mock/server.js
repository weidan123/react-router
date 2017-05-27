var app = require('koa')();
var router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// ��ҳ ���� ��棨��ֵ�ػݣ�
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdData
});

// ��ҳ ���� �Ƽ��б�����ϲ����
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    // ����
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('��ǰ���У�' + paramsCity)
    console.log('��ǰҳ����' + paramsPage)

    this.body = homeListData
});



// ��ʼ��������·��
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
