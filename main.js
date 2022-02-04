marked.parse.setOptions({breaks: true});

function updatePreview(){
    let previewElement = document.getElementById('preview');
    let editorValue = document.getElementById('editor').value;
    let markedUpHTML = marked.parse(editorValue);
    previewElement.innerHTML = markedUpHTML;
}


function setDefault(){
    let defaultText = `\
# Hernán Mele
## a markdown previewer
[Learn more about me](http://www.example.com).

***very well***

\`Thank you for watching \`

\`\`\`
function exampleOf(){
return multilineCodeBlock;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![Hernan Mele](https://passion-stickers.com/3877-large_default/tarja-turunen-decals.jpg)

**This is an example of Bolded text**
`;

    let editorField = document.getElementById('editor');
    let previewElement = document.getElementById('preview');
    editorField.value = defaultText;
    previewElement.innerHTML = marked.parse(defaultText);
}
