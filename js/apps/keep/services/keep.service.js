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
      type: "noteVid",
      info: {
        url:
          "https://www.youtube.com/watch?v=AYk4VTZIaIM&list=LL4i5XiY9eJuipv4_uMQUxPw&index=17&t=0s",
      },
    },
    {
      type: "noteVid",
      info: {
        url:
          "https://www.youtube.com/watch?v=09n2945JW_0&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=29%27",
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://miro.medium.com/max/500/1*E0JKFZnFnxjDeB0H-nS_og.jpeg",
      },
    },
    {
      type: "noteTodo",
      info: {
        list: [{ txt: 'code', completed: false }, { txt: 'refactor', completed: false }, { txt: 'tractor', completed: false }],
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
      type: "noteAud",
      info: {
        url:
          "https://cld2099web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3",
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
          "https://media-cdn.tripadvisor.com/media/photo-s/12/b6/65/39/it-is-better-to-see-something.jpg",
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
  // console.log('gNotes:', gNotes);
}

function updateNote(idx, noteTxt) {
  gNotes[idx].info.txt = noteTxt;
  // console.log("Service updating note...", idx, noteTxt);
  // console.log('gNotes:', gNotes);
}

function deleteNote(idx) {
  gNotes.splice(idx, 1);
  // console.log("Service deleting note..", idx);
}

function getNoteTemplate() {
  return {
    type: "noteTxt",
    info: {
      txt: ''
    }
  };
}
