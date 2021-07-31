export const quillToolbarOptions = {
  container: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

    ['clean'], // remove formatting button

    // ['emoji'],

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],
  ],
};
export const quillModules = {
  toolbar: quillToolbarOptions,
  // 'emoji-shortname': true,
  // 'emoji-textarea': true,
  // 'emoji-toolbar': true,
};
