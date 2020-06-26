export const emailService = {
    getEmails,
    getById,
    updateMail,
    deleteEmail,
    addEmail
};



function updateMail(mailId){
 gEmails.forEach(mail=>{
   if(mail.id===mailId) mail.isRead=true;
 })
}

function createEmail(subject,body,emailContent){
  return {
    subject,
    body,
    isRead: false,
    sentAt: '12:14 AM',
    emailContent,
    id:'15'
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
    body: 'Lorem ipsum dolor, sit  adipisicing   impedit, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'1'
  },
  {
    subject: "hey how are you?",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'2'
  },
  {
    subject: "good morning",
    body: 'Lorem ipsum dolor, sits dolores dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'3'
  },
  {
    subject: "tommorow i will be there",
    body: 'Lorem ipsum dolor, sit  adipies impedit, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'4'
  },
  {
    subject: "don`t forget",
    body: 'Lorem ipsum dolor, sit  adipisicing  a i, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'5'
  },
  {
    subject: "i am so happay",
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
    id:'6'
  },
  {
    subject: "tell me",
    body: 'Lorem ipsum dolor, sittates dolores impedit, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'7'
  },
  {
    subject: "do you know",
    body: 'Lorem ipsum dolor, sit  adniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'8'
  },
  {
    subject: "call me please",
    body: 'Lorem ipsum dolor, sit  adipisicing  a incides impedit, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'9'
  },
  {
    subject: "new place",
    body: 'Lorem ipsum dolor, sit  adipisicing  a incidit, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'10'
  },
  {
    subject: "good job",
    body: 'Lorem ipsum dolor, sit  adipisicintes dolores impedit, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'11'
  },
  {
    subject: "good job",
    body: 'Lorem ipsum dolor, sit  adipisicintes dolores impedit, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'12'
  },
  {
    subject: "good job",
    body: 'Lorem ipsum dolor, sit  adipisicintes dolores impedit, eveniet dignissimos, rerum illo. Quasi aut aliquam numquam reiciendis illum.',
    isRead: false,
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
    id:'13'
  },
  
];

function getEmails(){
      return gEmails
}

function getById(emailId) {
  return Promise.resolve(gEmails.find((email) => email.id === emailId));
}

  
