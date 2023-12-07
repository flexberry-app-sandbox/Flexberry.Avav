import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avav-запись-l');
  this.route('i-i-s-avav-запись-e',
  { path: 'i-i-s-avav-запись-e/:id' });
  this.route('i-i-s-avav-запись-e.new',
  { path: 'i-i-s-avav-запись-e/new' });
  this.route('i-i-s-avav-клиент-l');
  this.route('i-i-s-avav-клиент-e',
  { path: 'i-i-s-avav-клиент-e/:id' });
  this.route('i-i-s-avav-клиент-e.new',
  { path: 'i-i-s-avav-клиент-e/new' });
});

export default Router;
