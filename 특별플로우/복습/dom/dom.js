const users = [
  {
    id: 1,
    name: "김사과",
    age: 20,
    height: 190,
  },
  {
    id: 2,
    name: "이수박",
    age: 32,
    height: 185,
  },
  {
    id: 3,
    name: "오렌지",
    age: 20,
    height: 180,
  },
  {
    id: 4,
    name: "이멜론",
    age: 28,
    height: 175,
  },
];
let infoIndex = 0;
const $info = document.querySelector("#info");
$info.innerHTML = `
    <div>${users[infoIndex].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>
`;
const $PrevBtn = document.querySelector(".prev");
const $NextBtn = document.querySelector(".next");

console.log(users.length);

//prev 버튼 구현
let infoUser = () => {
  if (infoIndex === 0) {
    infoIndex = users.length;
  } else {
    infoIndex--;
    $info.innerHTML = `
    <div>${users[infoIndex].name}</div>
    <div>${users[infoIndex].age}</div>
    <div>${users[infoIndex].height}</div>
`;
  }
  console.log(users[infoIndex - 1]);
};
$PrevBtn.addEventListener("click", infoUser);

//Next 버튼 구현
infoIndex = 0;
if (infoIndex === 0) {
  infoIndex = users.length;
} else {
  infoIndex++;
  $info.innerHTML = `
    <div>${users[infoIndex].name}</div>
    <div>${users[infoIndex].age}</div>
    <div>${users[infoIndex].height}</div>
`;
}
