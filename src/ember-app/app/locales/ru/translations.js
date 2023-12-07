import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISAvavЗаписьLForm from './forms/i-i-s-avav-запись-l';
import IISAvavКлиентLForm from './forms/i-i-s-avav-клиент-l';
import IISAvavЗаписьEForm from './forms/i-i-s-avav-запись-e';
import IISAvavКлиентEForm from './forms/i-i-s-avav-клиент-e';
import IISAvavЗаписьModel from './models/i-i-s-avav-запись';
import IISAvavКлиентModel from './models/i-i-s-avav-клиент';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avav-запись': IISAvavЗаписьModel,
    'i-i-s-avav-клиент': IISAvavКлиентModel
  },

  'application-name': 'Avav',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Avav',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avav',
          title: 'Avav'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        avav: {
          caption: 'Avav',
          title: 'Avav',
          'i-i-s-avav-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-avav-запись-l': {
            caption: 'Запись',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-avav-запись-l': IISAvavЗаписьLForm,
    'i-i-s-avav-клиент-l': IISAvavКлиентLForm,
    'i-i-s-avav-запись-e': IISAvavЗаписьEForm,
    'i-i-s-avav-клиент-e': IISAvavКлиентEForm
  },

});

export default translations;
