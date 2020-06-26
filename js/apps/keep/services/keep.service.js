"use strict";

var gNotes = _createNotes();

export const keepService = {
  getNotes,
  getNoteByIdx,
  saveNote,
  updateNote,
  deleteNote,
  getNoteTemplate,
};

function _createNotes() {
  return [
    {
      type: "noteImg",
      info: {
        url:
          "https://miro.medium.com/max/500/1*E0JKFZnFnxjDeB0H-nS_og.jpeg",
      },
    },
    {
      type: "noteTxt",
      info: {
        txt: "(Puki !== Muki) however both are truthy variables.",
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://statics.lesinrocks.com/content/thumbs/uploads/2020/06/26/1456436/width-1200-height-630-watermark-2/khruangbin-web-width_1982_height_1079_x_14_y_7.jpg",
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://thevinylfactory.com/wp-content/uploads/2020/04/khruangbin-live.jpg",
      },
    },
    {
      type: "noteTxt",
      info: {
        txt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae fuga doloribus quaerat mollitia omnis esse. Quisquam id voluptate officiis placeat dignissimos? Odit, qui assumenda sapiente in esse debitis nostrum.",
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif",
      },
    },
    {
      type: "noteTxt",
      info: {
        txt: "Modal: hidden/show; pos: abs; z-index: 0;",
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://lh3.googleusercontent.com/proxy/FGhrukzHCwv7u4B1E6rR3eWFEDLUWEmxjavi50sz6fI08sMwSi1zURY7cV5dFdGLyEXun2cqRqbNX0BaZcTZvMomVkmPvu8fKA",
      },
    },
  ];
}

function _createNotesOld() {
  return [
    {
      type: "noteTxt",
      isPinned: true,
      info: {
        txt: "Fullstack Me Baby!",
      },
    },
    {
      type: "noteImg",
      info: {
        url: "./img/cabin-near-mountain.jpg",
        title: "Dream House",
      },
      style: {
        backgroundColor: "#00d",
      },
    },
    {
      type: "noteTodo",
      info: {
        label: "דוח שנתי 2019",
        todos: [
          {
            txt: "106",
            doneAt: null,
          },
          {
            txt: "אישורים מקופות גמל",
            doneAt: 187111111,
          },
        ],
      },
    },
  ];
}

function getNotes() {
  return Promise.resolve(gNotes);
}

function getNoteByIdx(idx) {
  return Promise.resolve(gNotes[idx]);
}

function saveNote(type, noteTxt) {
  console.log('type:', type, 'noteTxt:', noteTxt);
  if (!noteTxt) Promise.reject();

  var note = { type: type, info: {} };
  
  switch (type) {
    case 'noteTxt':
      note.info.txt = noteTxt;
      break;
    case 'noteImg':
    case 'noteVid':
    case 'noteAud':
      note.info.url = noteTxt;
      break;

    case 'noteTodo':
      let listArr = noteTxt.split(',');
      note.info.list = listArr.map(item => {
				return { txt: item, completed: false };
			});
			break;
  }

  gNotes.unshift(note);
  // console.log("note manipulated:", note);
  console.log('gNotes:', gNotes);
}

function updateNote(idx, noteTxt) {
  gNotes[idx].info.txt = noteTxt;
  console.log("Service updating note...", idx, noteTxt);
}

function deleteNote(idx) {
  gNotes.splice(idx, 1);
  console.log("Service deleting note..", idx);
}

function getNoteTemplate() {
  return {
    type: "noteTxt",
    info: {
      txt: ''
    }
  };
}
