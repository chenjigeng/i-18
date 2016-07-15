var i18nGenerator = require('i18n-generator');
 
var inputFile = ['flag.txt','input.txt', 'input1.txt'];
    outputPath = 'output';
 
i18nGenerator(inputFile, outputPath, true);
 
// js-beautify your json 
// i18nGenerator('input.txt', outputPath, true);
// // or given js-beautify options 
// // settings split variable (default as |) 
// i18nGenerator(inputFile,outputPath, {}, 'csv');
 
// options => https://github.com/beautify-web/js-beautify#options 
// splitter support 
// | => pipe (default) 
// , => csv 
// \t => tsv 
 
// get output data api 
// input can be file (.txt) or string (data) 
// i18nGenerator.get(input, 'csv', function (err, data) {
//     console.log(data);
//     // => output i18n data 
// });
 
// or you can 
// i18nGenerator.get(input, function (err, data) {
// 	console.log(data);
// });