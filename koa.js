const koa = require('koa');
const app = koa();

// app.use(function* (next) {
//   console.log('second middleware');
//   yield next;
// });
//
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function* (){
  this.cookies.set('Auth', 'dkslqfjdqslkfjdsqjfk');
  this.body = {
    message: "Koa app is running on port 8000"
  };
  // yield next;
});

app.listen(8000, () => {
  console.log('Koa app is running on port 8000');
});
