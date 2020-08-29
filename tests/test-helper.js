import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import Application from 'homeschool/app';
import config from 'homeschool/config/environment';

setApplication(Application.create(config.APP));

start();
