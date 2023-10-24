/*

(1) map
	예를 들면 map은 각 요소를 순회하여 콜백함수가 반환하는 값을 새로운 배열로 만들어주는 메서드입니다.
	이를 이용하면 아래와 같은 상황을 생각할 수 있습니다.

		ex)
			const posts = [post1, post2, post3]
			
		  저는 이 posts 배열의 각 요소를 '<div></div>' html로 이루어진 string 배열로 구현할거에요!
		
			posts.map((post) => `<div>${post.title}</div>`)
		
			posts의 모든 요소를 순회하여 각 순회당 데이터를 콜백함수의 반환값인 
		  `<div>${post}</div>`로 변환하고자 합니다!
		
			위 실행문의 반환 값은 아래와 같습니다 :)
			['<div>post1<div>', '<div>post2<div>', '<div>post3<div>']
	
			이를 join method를 활용하면 '<div></div><div></div><div></div>'의 형태로
			변환되고 이를 innerHTML로 보여줄 수도 있겠죠!?
			
			즉 map은 기본 배열을 다른 형태로 변환하거나 바꾸어 나타낼 때 많이 사용하며 주로 사용되는 곳은
		  Read, 배열의 각 요소 데이터를 파싱(가공)하여 다른 형태로 보여줄 때 사용합니다.
	


위의 방식에 맞춰 아래의 메서드들에도 예시를 생각해보며 직접 내가 구현하고자 싶은 함수를 상상하고
설계해보세요!

	find, findInex, filter, sort, reduce, ....
	
	<find func>
	:찾는것이 인덱스가 아닌 해당 원소나 객체일경우
	제공된 테스트 함수를 충족하는 배열의 첫 번째 원소를 반환한다. 충족하는 원소가 없으면 undefined를 반환한다
	posts.find(el => el.includes('post'));
	//post1

	<findIndex func>
	: 배열안 값들이 객체이거나 특정 조건을 만족하는 원소의 인덱스를 알아내야하는경우
	제공된 테스트 함수를 충족하는 원소의 인덱스를 반환.
	posts.findIndex(el => el.includes('post'))
	//0

	<filter>
	주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
	posts.filter(el => el.includes('post'))
	// ['post1','post2','post3']

	<sort>
	:사용시 원본 함수 바꿈. 오름차순
	const arr = [1,5,4,33,200];
	arr.sort((a,b)=>a-b);
	// [1,200,33,4,5] -> sort()의 파라미터 값에 아무것도 넣지 않으면 문자열로 취급되어 유니코드 값 순서대로 정렬한다
	// [1,4,5,33,200]
	문자열 정럴시에도 첫글자를 유니코드로 변환하여 a-b 처럼 함수를 만들어 주면 됨.
	
	const array = ["banana", "grape", "apple", "orange", "kiwi"];
	array.sort( (a, b) => a[0].charCodeAt() - b[0].charCodeAt()  );
	console.log(array);
	// ['apple', 'banana', 'grape', 'kiwi', 'orange']

	<reduce>
	:array의 각 요소를 누적계산하여 하나의 결과값을 반환한다
	array를 변형 시키므로 새로 선언해서 써줘야한다.

	const number = [1, 2, 3, 4, 5];
	const sum = number.reduce(function(a, b){
	return a + b;
	}, 0);
	console.log(sum);  
	// 15
	reduce(acc,cur)
	acc: accumulator :누산기. 누적되는값 . 최종적으로 출력되는 값
	cur : current :현재 돌고있는 요소
		const numbers = [4, 3, 2, 1];
		let sum = numbers.reduce((acc, cur) => {
			return acc + cur;
		});
	console.log(sum);
	acc += cur; // 4 += 3;  ->7
	acc += cur; // 7 += 2;  ->9
	acc += cur; // 9 += 1;
	console.log(acc); // 10
	// 10
	
*/
/*charAt => ex) hayoung / charAt(2) =>y
charCodeAt = 주어진 index에 해당하는 유니코드 값을 리턴하는데 이 값은 unicode가 지원되는 모든 시스템에서 동일한 문자를 가르킨다.
*/
