import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avav',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avav',
          title: 'Avav'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-avav-запись-l': IISAvavЗаписьLForm,
    'i-i-s-avav-клиент-l': IISAvavКлиентLForm,
    'i-i-s-avav-запись-e': IISAvavЗаписьEForm,
    'i-i-s-avav-клиент-e': IISAvavКлиентEForm
  },

});

export default translations;
