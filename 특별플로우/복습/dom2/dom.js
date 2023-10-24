import mockPost from "./mock.json" assert { type: "json" };
console.log(mockPost);
/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/
const $postDetail = document.querySelector("#post-detail");
const $repliesList = document.querySelector("#replies-list");
const $InputBtn = document.querySelector("button");
const $input = document.querySelector("input");

//게시글 상세 나타내기
const renderPost = () => {
  const $p = document.querySelector("p");
  $p.innerHTML = `<div id="post-detail">
  <p>${mockPost.post.title}</br>
  ${mockPost.post.content}</br>
  ${mockPost.post.User.nickName}
  </p>
</div>`;
  console.log($p.innerHTML);
};
renderPost();

//댓글 목록 나오기
const replies = () => {
  for (let i = 0; i < mockPost.post.Replies.length; i++) {
    $repliesList.innerHTML += `<div>${mockPost.post.Replies[i].User.nickName}
    ${mockPost.post.Replies[i].content}
    </div>`;
  }
};
replies();
//추가버튼 클릭시, 댓글목록에 추가
$InputBtn.addEventListener("click", () => {
  console.log("버튼 클릭");
  $repliesList.innerHTML += `<div>${$input.value}</div>`;
  console.log($input.value);
});
