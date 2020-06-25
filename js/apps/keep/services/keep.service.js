"use strict";

var gNotes = _createNotes();

export const keepService = {
  getNotes,
  saveNote,
};

function _createNotes() {
  return [
    {
      type: "noteTxt",
      info: {
        txt: "(Puki !== Muki) however both are truthy variables.",
      },
    },
    {
      type: "noteTxt",
      info: {
        txt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae fuga doloribus quaerat mollitia omnis esse. Quisquam id voluptate officiis placeat dignissimos? Odit, qui assumenda sapiente in esse debitis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae fuga doloribus quaerat mollitia omnis esse. Quisquam id voluptate officiis placeat dignissimos? Odit, qui assumenda sapiente in esse debitis nostrum.",
      },
    },
    {
      type: "noteTxt",
      info: {
        txt:
          "Key Points to Remember: 1. Use a silver or white reflector of a decent enough size to cover a half body shot. A 80cm/32in size is a good place to start. 2. Cut a hole in the center of your reflector large enough to take the diameter of your largest lens. 3. Don't cut a hole in your carpet. 4. The bounced light of your reflector is your key light. To adjust the exposure of this light you will have to move the reflector closer and further away until you're happy. 5. Use an Neutral Density filter on your lens to reduce any unwanted power from your strobe and shoot as wide open as your lens will allow.",
      },
    },
    {
      type: "noteTxt",
      info: {
        txt: "Modal: hidden/show; pos: abs; z-index: 0;",
      },
    }
  ]
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

function saveNote(noteTxt) {
  console.log("saving note...", noteTxt);
  const note = {
    type: "noteTxt",
    info: {
      txt: noteTxt
    }
  };
  gNotes.unshift(note);
  console.log(gNotes);
}

function updateNote(note) {}
