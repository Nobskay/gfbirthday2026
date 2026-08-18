export const content = {
  name: 'Jihan',
  fullName: 'Jihan Cahya Wijaya',
  subtitle: 'for the girl who makes everything softer',
  birthday: new Date('2026-08-19T00:00:00'),
  letter: [
    `{{LOVE_LETTER_TEXT}} Jihan, somehow the ordinary parts of my days became my favorite ones after you arrived—the little check-ins, the jokes that make no sense to anyone else, and the quiet moments where being beside you is already enough. You make life feel softer without ever making it smaller.`,
    `I love the way you care, the way you keep going, and the thousand tiny expressions you make when you are thinking, teasing me, or pretending not to be amused. I admire the person you are now, and I feel lucky that I get to witness the person you keep becoming.`,
    `Thank you for letting me know your gentle heart, for sharing your bright days and your complicated ones, and for building a little world with me—complete with Miu's fur on absolutely everything. Loving you feels like gratitude, friendship, comfort, and a very cute amount of chaos all at once.`,
    `On your twenty-fifth birthday, I hope you feel celebrated for every beautiful thing you are. I will keep choosing you in the grand plans and in the sleepy, unglamorous Tuesdays. Happy birthday, sayang. I love you—steadily, proudly, and more than this page can hold.`
  ],
  photos: [
    {src:'/photos/placeholder-1.jpg', alt:'Jihan smiling', caption:'the smile I would choose in every lifetime'},
    {src:'/photos/placeholder-2.jpg', alt:'A date memory', caption:'our first date-ish (the official story may vary)'},
    {src:'/photos/placeholder-3.jpg', alt:'Photo booth memory', caption:'proof we are excellent at being unserious'},
    {src:'/photos/placeholder-4.jpg', alt:'An everyday memory', caption:'the everyday us'},
    {src:'/photos/placeholder-5.jpg', alt:'A shared adventure', caption:'somewhere good, because you were there'},
    {src:'/photos/placeholder-6.jpg', alt:'A warm dinner memory', caption:'good food, better company'},
    {src:'/photos/miu-1.jpg', alt:'Miu being adorable', caption:'our tiny white supervisor'},
    {src:'/photos/placeholder-7.jpg', alt:'A favorite shared photo', caption:'one of my forever favorites'},
    {src:'/photos/miu-2.jpg', alt:'Miu with the family', caption:'family portrait, Miu-approved'}
  ],
  surprises: [
    {label:'why I love you', icon:'♡', message:'{{SURPRISE_MESSAGE_1}} You make kindness look effortless, and you make me want to be gentler too.'},
    {label:'a promise', icon:'✦', message:'{{SURPRISE_MESSAGE_2}} I promise to keep showing up—not only for the highlights, but for all the in-between days.'},
    {label:'a memory', icon:'❀', message:'{{SURPRISE_MESSAGE_3}} I still smile when I remember the moment we laughed so hard we forgot what started it.'},
    {label:'a wish', icon:'☾', message:'{{SURPRISE_MESSAGE_4}} I hope this year brings you calm mornings, brave dreams, and desserts you do not have to share.'},
    {label:'a secret', icon:'♥', message:'{{SURPRISE_MESSAGE_5}} Even after all this time, seeing your name light up my phone still makes my day better.'}
  ],
  miu: {
    message: `{{MIU_MESSAGE}} Miu is our fluffy little witness, professional nap consultant, and full-time inspector of every bag and box. Somewhere between the purrs, tiny paw prints, and white fur on our clothes, Miu made our love story feel even more like home.`,
    photos: ['/photos/miu-1.jpg','/photos/miu-2.jpg','/photos/miu-3.jpg']
  },
  closing: 'In every version of tomorrow, I hope there is still an us.',
  signature: '— always yours'
} as const;
