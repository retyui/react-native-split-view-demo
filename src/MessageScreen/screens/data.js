const rand = () => Math.floor(Math.random() * 10) + 2;

const messages = [
  {
    id: '1',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    id: '2',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
  {
    id: '3',
    body:
      'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  },
  {
    id: '4',
    body:
      'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
  },
  {
    id: '5',
    body:
      'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
  },
  {
    id: '6',
    body:
      'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
  },
  {
    id: '7',
    body:
      'maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor',
  },
  {
    id: '8',
    body:
      'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque',
  },
  {
    id: '9',
    body:
      'sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus',
  },
  {
    id: '10',
    body:
      'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis',
  },
  {
    id: '11',
    body:
      'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
  },
  {
    id: '12',
    body:
      'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit',
  },
];

export const usersById = {
  '1': {
    messages: messages.slice(0, rand()),
    id: '1',
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg',
  },
  '2': {
    messages: messages.slice(0, rand()),
    id: '2',
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg',
  },
  '3': {
    messages: messages.slice(0, rand()),
    id: '3',
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg',
  },
  '4': {
    messages: messages.slice(0, rand()),
    id: '4',
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg',
  },
  '5': {
    messages: messages.slice(0, rand()),
    id: '5',
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg',
  },
  '6': {
    messages: messages.slice(0, rand()),
    id: '6',
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    phone: '1-477-935-8478 x6430',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg',
  },
  '7': {
    messages: messages.slice(0, rand()),
    id: '7',
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    phone: '210.067.6132',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
  },
  '8': {
    messages: messages.slice(0, rand()),
    id: '8',
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    phone: '586.493.6943 x140',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
  },
  '9': {
    messages: messages.slice(0, rand()),
    id: '9',
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    phone: '(775)976-6794 x41206',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
  },
  '10': {
    messages: messages.slice(0, rand()),
    id: '10',
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    phone: '024-648-3804',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
  },
};

export const userIds = Object.values(usersById).map(({id}) => id);
