const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const arrKeys = Object.keys(user);
for (const keys of arrKeys){
  console.log(keys +' - '+ user[keys]);
};