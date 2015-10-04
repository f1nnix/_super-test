'use strict';

var Promise = require('bluebird'),
  path = require('path'),
  fs = require('fs')

var FileKeeper = require('./filekeeper.js');

module.exports = class ImageKeeper extends FileKeeper {
  constructor(keeperPath, options) {
    super(`/${keeperPath}`, options)
    this.keeperPath = keeperPath;
  }

  /**
   * @static
   * Resolves file path to absolute if needed, validates existance if specified
   * @param  {String} filePath Relative or absolute path to file
   * @param  {Boolean} checkExistance Check or not actual file existance
   * @return {String|null} Returns absolute existing (if specified) path string. Returns null if cannot be resolved, or not exists
   */
  static resolvePath(filePath, checkExistance) {
    checkExistance = typeof checkExistance !== 'undefined' ? checkExistance :
      false;

    // resolve to absolute if needed
    if (path.isAbsolute(filePath) === false) {
      try {
        filePath = path.resolve(__dirname, filePath);
      } catch (e) {
        filePath = null;
      }
    }
    // check existance if needed
    if (checkExistance === true) {
      if (fs.existsSync(filePath) === false) {
        filePath = null;
      }
    }
    return filePath;
  }

  /**
   * Promise wrapper over static resolvePath method.
   * @param  {String} filePath File path to resolve
   * @return {Promise.<String, Error>}      Resolved path string
   */
  resolvePath(path) {
    return new Promise((resolve, reject) => {
      try {
        path = this.constructor.resolvePath(path, true);
        path !== null ? resolve(path) : reject(new Error(
          'File path cannot be resolved'))
      } catch (e) {
        // TODO: handle e
        reject(new Error(
          'File path cannot be resolved'))
      }
    })
  }

  save(filePath) {
    return new Promise((resolve, reject) => {
      this
        .resolvePath(filePath)
        .then(fileData => {
          var filePath = fileData[0],
            mime = fileData[1];

          super.save(filePath, mime);
        })
        .catch(function(err) {
          reject(err)
        })
    })
  }
}
