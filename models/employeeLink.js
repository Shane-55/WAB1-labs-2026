'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employeeLink = {

  store: new JsonStore('./models/employee1.json', { employee: {} }),
  collection: 'employee',


  getEmpInfo() {
    return this.store.findAll(this.collection);
  },

};

export default employeeLink;
