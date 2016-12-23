import markdownpdf from 'markdown-pdf';
import path from 'path';
import fs from 'fs';
import plg from 'remarkable-classy';

let options = {
    remarkable: {
        html: true,
        breaks: true,
        plugins: [ plg ],
        syntax: [ 'footnote', 'sup', 'sub' ]
    }
}

function convert() {

	markdownpdf(options).from(process.cwd()+"/README.md").to(process.cwd()+"/README.pdf", (err) => {
    if (err) console.log(err);
	  console.log("PDF creado correctamente")
	});
}

export {
    convert
};
