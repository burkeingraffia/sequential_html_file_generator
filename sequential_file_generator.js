//This script will generate multiple files with sequential file names and similar
//templated content

//Requires Node and Handlebars  - handlebarsjs.com
//Run it with:  
//node sequential_file_generator.js


const fs = require('fs');
const Handlebars = require('handlebars');

const prefix = "myProjectName_";
const pagenum = 42; //how many files numbered as myProjectName_1.html etc

for (i = 0; i < pagenum; i++) {

    var newi = String(i + 1);
    if (newi < 10) {
        newi = "0" + newi;
    }
    const source = '<html>' +
        '<head>' +
        '<title>' + prefix + newi + '</title>' +
        '</head>' +
        '<body>' +
        '</body>' +
        '</html>'


    ;
    const template = Handlebars.compile(source);
    const contents = template({
        title: 'page_creator'
    });


    fs.writeFile(prefix + newi + '.html', contents, err => {
        if (err) {
            return console.error('Failed to generate pages.');
        }

        console.log('Page generated!');

    });

}