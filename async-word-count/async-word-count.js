var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

// call getWordCount on filePathOne
//  cb takes err and wc
//    handle err
// call getWordCount on fpTwo
//  cb takes err and wc
//    handle err
//  call cb taking null and wc + wc

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  getWordCount(filePathOne, (err, wordCount1) => {
    if (err) {
      throw err;
    }
    getWordCount(filePathTwo, (err, wordCount2) => {
      if (err) {
        throw err;
      }
      callback(wordCount1 + wordCount2)
    })
  })
};

module.exports = getTotalWordCount;
