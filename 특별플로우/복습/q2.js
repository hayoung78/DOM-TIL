const users = [
  {
    id: 1,
    name: "김성용",
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
const $AddBtn = document.querySelector(".addBtn"); //추가버튼
const $checkIdBtn = document.querySelector(".checkId"); //아이디중복확인버튼
const $inputId = document.querySelector(".Id"); //아이디입력칸
const $inputName = document.querySelector(".name"); //이름입력칸
const $inputAge = document.querySelector(".age"); //나이입력칸
const $inputHeight = document.querySelector(".height"); //키입력칸
const $idList = document.querySelector(".idAdd"); //유저목록리스트
/* 
문제1. 유저 추가하기
  단 id는 고유 번호로 반드시 순서대로일 필요는 없지만, 어떠한 경우에도 겹쳐서 안됩니다*/
const post = () => {
  for (let i = 0; i < users.length; i++) {
    $idList.innerHTML += `<p>ID : ${users[i].id}</br>
    name : ${users[i].name}</br>
    age : ${users[i].age}</br>
    height : ${users[i].height}
    </p>`;
  }
  console.log($idList.innerHTML);
};
post();
//추가버튼 먼저눌렀을때 팝업창"아이디중복확인먼저재후세요'
$InputBtn.addEventListener("click", () => {
  return alert("ID중복확인 먼저해주세요");
});

/*문제2. 유저 삭제하기
  내가 원하는 유저를 삭제할 수 있어야합니다.
  단, 동일한 유저의 이름이 있더라도 정확히 원하는 유저여야합니다.

문제3. 유저 수정하기 
  내가 수정하고자 하는 유저의 개인정보를 수정해야합니다.

문제4. 유저 조회하기
  위의 모든 상황이 적용된 결과를을 콘솔창에 띄울 것
  단 위의 수정 내용은 모두 적용된 상태여야 한다.

문제5. 조회한 유저를 height별 오름 차순으로 정렬하여 조회하기
*/
