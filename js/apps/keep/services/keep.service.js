"use strict";

var gNotes = _createNotes();

export const keepService = {
  getNotes,
};

function _createNotes() {
  return  [
    {
      type: "NoteText",
      isPinned: true,
      info: {
        txt: "Fullstack Me Baby!",
      },
    },
    {
      type: "NoteImg",
      info: {
        url:
          "./img/cabin-near-mountain.jpg",
        title: "Dream House",
      },
      style: {
        backgroundColor: "#00d",
      },
    },
    {
      type: "NoteTodo",
      info: {
        label: "How was it:",
        todos: [
          {
            txt: "Do that",
            doneAt: null,
          },
          {
            txt: "Do this",
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
