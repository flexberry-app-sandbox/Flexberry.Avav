import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('date'),
  клиент: DS.belongsTo('i-i-s-avav-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-avav-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-avav-запись.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-avav-запись', {
    время: attr('Время', { index: 0 }),
    клиент: belongsTo('i-i-s-avav-клиент', 'Клиент', {
      имя: attr('Имя', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-avav-запись', {
    время: attr('Время', { index: 0 }),
    клиент: belongsTo('i-i-s-avav-клиент', 'Имя', {
      имя: attr('Имя', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
