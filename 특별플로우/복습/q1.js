const user = {
  name: "김성용",
  age: 20,
  height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

/* 
(1) user[”key”], user.key
(2) Object.keys(user) // ['name', 'age' ...]
(3) Object.values(user) //['김성용', 20, 190]
(4) Object.entries(user)// [['name','김성용'],['age',20],...]
(5) for in
for(let i in user){
  console.log(user[i])
}
*/

// 문제2. 값이 “김성용”인 속성의 key 찾기

function find(a, value) {
  return Object.keys(a).find((key) => a[key] === value);
}
let b = find(user, "김성용");
console.log(b);

// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정
const newUser = { ...user };
newUser.name = "최하영";
console.log(newUser);
