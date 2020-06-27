export const emailService = {
    getEmails,
    getById,
    updateMail,
    deleteEmail,
    addEmail
};

function makeRandomId(){
  return Math.random().toString(36).substr(2, 9);
}

function updateMail(mailId){
  console.log(mailId);
  
 gEmails.forEach(mail=>{
   if(mail.id===mailId) mail.isRead=true;
 })
}

function createEmail(subject,body,emailContent){
  return {
    subject,
    body,
    isRead: false,
    kindOf:'sent',
    sentAt: '12:14 AM',
    emailContent,
    id:makeRandomId()
  } 
}

function addEmail(subject,body,emailContent){
 gEmails.push(createEmail(subject,body,emailContent));
}

function deleteEmail(emailID){
  gEmails.forEach(function(email,index){
  if(email.id===(emailID)) gEmails.splice(index,1)
})
}


var gEmails = [
  {
    subject: "Wassap bar?",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '12:14 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "hey how are you?",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'sent',
    sentAt: '1:14 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "good morning",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '3:35 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "tommorow i will be there",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '2:44 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "don`t forget",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'star',
    sentAt: '5:14 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "i am so happay",
    isRead: false,
    kindOf:'star',
    body: 'Lorem ipsum dolor, sit  adipisicing  a incidunt voluptates dolores',
    sentAt: '7:37 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "tell me",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '2:10 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "do you know",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '4:14 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "call me please",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '6:55 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "new place",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '5:23 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "good job",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '3:15 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "good job",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '3:15 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  {
    subject: "good job",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    kindOf:'inbox',
    sentAt: '3:15 AM',
    emailContent: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus,',
    ],
    id:makeRandomId()
  },
  
];

function getEmails(){
      return gEmails
}

function getById(emailId) {
  return Promise.resolve(gEmails.find((email) => email.id === emailId));
}

  
