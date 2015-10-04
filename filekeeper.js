'use strict';

var Promise = require('bluebird'),
  path = require('path')

module.exports = class FileKeeper {
  constructor(keeperPath, options) {
    this.storagePath = path.resolve(`/storage${keeperPath}`);
    this.options = options;
  }

  /**
   * Saves file to permanent storage, resolves saved file data
   * @param  {String} filePath File path for saving file
   * @param  {Object} mime     MIME-object
   * @param  {Object} mime.ext     Exension to save
   * @param  {Object} mime.mime     MIME-type
   * @return {Promise.<Object|{path: String, container: String, name: String, ext: String, mimeType: String }, Error>}    Promise with File object if resolved, Error if rejected.
   */
  save(filePath, mime) {
    console.log('Superclass\' method is called.');
  }

}
