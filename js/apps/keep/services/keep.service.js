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

"'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.' ― Albert Einstein"

// 
// 
// https://yesno.wtf/assets/yes/0-c44a7789d54cbdcad867fb7845ff03ae.gif
// 
// 



function _createNotes() {
  return [
    {
      type: "noteImg",
      info: {
        url: "https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif",
      },
    },
    {
      type: "noteTxt",
      info: {
        txt: "Definition, Algorithm: Word used by programmers when they do not want to explain what they did.",
      },
    },
    {
      type: "noteVid",
      info: {
        url:
          "https://www.youtube.com/watch?v=AYk4VTZIaIM&list=LL4i5XiY9eJuipv4_uMQUxPw&index=17&t=0s",
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://i.pinimg.com/originals/2b/d2/51/2bd251c6a89a149c6d96774957651d91.jpg",
      },
    },
    {
      type: "noteAud",
      info: {
        url: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3",
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Adams_The_Tetons_and_the_Snake_River.jpg/390px-Adams_The_Tetons_and_the_Snake_River.jpg",
      },
    },
    {
      type: "noteTodo",
      info: {
        list: [{ txt: 'Lip Balm', completed: false }, { txt: 'Toothbrush', completed: false }, { txt: 'Sunscreen', completed: false }, { txt: 'Shampoo', completed: false }, { txt: 'Nail Clippers', completed: false }, { txt: 'Birth Control', completed: false }, { txt: 'Laundry Bag', completed: false }, { txt: 'Shaving Supplies', completed: false }],
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif",
      },
    },
    {
      type: "noteVid",
      info: {
        url:
          "https://www.youtube.com/watch?v=iOBXuCYB4jQ",
      },
    },
    {
      type: "noteTxt",
      info: {
        txt: "'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.' ― Albert Einstein",
      },
    },
    {
      type: "noteVid",
      info: {
        url:
          "https://www.youtube.com/watch?v=Fpeqhs1JRv0",
      },
    },
    {
      type: "noteVid",
      info: {
        url:
          "https://www.youtube.com/watch?v=RPJnukaw-3Q",
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
        list: [{ txt: 'eat', completed: false }, { txt: 'code', completed: false }, { txt: 'sleep', completed: false }],
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://media-cdn.tripadvisor.com/media/photo-s/12/b6/65/39/it-is-better-to-see-something.jpg",
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
          "QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.",
      },
    },
    {
      type: "noteImg",
      info: {
        url:
          "https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif",
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
