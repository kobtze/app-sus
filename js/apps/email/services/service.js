export const emailService = {
    getEmails,
    getById,
    updateMail,
    deleteEmail,
    addEmail,
    addStar,
    removeStar
};

function removeStar(mailId){
  gEmails.forEach(mail=>{
    if(mail.id===mailId) mail.isStarred=false;
  })
}

function addStar(mailId){
gEmails.forEach(mail=>{
   if(mail.id===mailId) mail.isStarred=true;
 })

}

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
    folder:'sent',
    isStarred: false,
    isSent: true,
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
    body: 'Google’s star is trailed, without backdrop, by yellow lines, ',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: false,
    sentAt: '12:14 AM',
    emailContent: 'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "hey how are you?",
    body: 'A melon fruit in a light greenish-brown rind.',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: false,
    sentAt: '1:14 AM',
    emailContent:'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    
    id:makeRandomId()
  },
  {
    subject: "good morning",
    body: 'but can resemble a honeydew at a distance.',
    isRead: false,
    folder:'inbox',
    isStarred: true,
    isSent: false,
    sentAt: '3:35 AM',
    emailContent: 'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "tommorow i will be there",
    body: 'Lorem ipsum dolor, sit  a incidunt voluptates dolores impedit, eveniet ',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: false,
    sentAt: '2:44 AM',
    emailContent: 'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "don`t forget",
    body: 'A slice of watermelon, showing its rich pink flesh, black seeds, and green rind.',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: false,
    sentAt: '5:14 AM',
    emailContent:'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "i am so happay",
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: false,
    body: 'May be used for astronomical stars and other content concerning space.',
    sentAt: '7:37 AM',
    emailContent: 'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "tell me",
    body: 'against a night sky, as if moving down to the left. ',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: false,
    sentAt: '2:10 AM',
    emailContent: 'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "do you know",
    body: 'Commonly used to represent various senses of glowing',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: false,
    sentAt: '4:14 AM',
    emailContent: 'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "call me please",
    body: 'bursts are blue lines, though were previously yellow. Apple’s star',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: false,
    sentAt: '6:55 AM',
    emailContent:'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "new place",
    body: 'On Snapchat, this emoji displays next to a contact',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: false,
    sentAt: '5:23 AM',
    emailContent:'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "good job",
    body: 'Find the perfect solution to your sugar',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: true,
    sentAt: '3:15 AM',
    emailContent:'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "good job",
    body: 'homemade cake recipes ',
    isRead: false,
    folder:'inbox',
    isStarred: false,
    isSent: true,
    sentAt: '3:15 AM',
    emailContent: 'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  {
    subject: "good job",
    body: 'A glowing, five-point gold star',
    isRead: false,
    folder:'inbox',
    isStarred: true,
    isSent: false,
    sentAt: '3:15 AM',
    emailContent:'This cake was sent home from our childrens school. It is the simplest, great tasting cake Ive ever made. Great to make with the kids, especially for cupcakes.',
    id:makeRandomId()
  },
  
];

function getEmails(){
      return gEmails
}

function getById(emailId) {
  return Promise.resolve(gEmails.find((email) => email.id === emailId));
}

  
