/*(1) 자동차의 엔진 시동을 걸려고 합니다. 한번 시동을 킨 자동차는 다시 시동을 걸 수 없다고 하였을 때
아래의 결과가 나오도록 함수를 설계하고 구현해보세요

-- 올바른 경우 --
on()  // 시동이 걸렸습니다.
off() // 시동이 꺼져있습니다.
on() // 시동이 걸렸습니다.

-- 이미 엔진이 걸려있는 경우 --
on() // 시동이 걸렸습니다.
on() // 이미 시동이 걸려있습니다.*/

let engine = 0; // 시동 off 상태

function on() {
  if (engine === 0) {
    console.log("시동이 걸렸습니다");
    return (engine = 1);
  } else {
    return console.log("시동이 이미 걸렸습니다");
  }
}

function off() {
  return console.log("시동이 꺼져있습니다");
}
