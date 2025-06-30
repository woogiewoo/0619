"use strict";  /* 원격 모드 >> 에러 발생시 좀 더 구체적으로 에러 메세지를 표시해준다 */
/* x = 15;  */
/* js는 유연해서 웬만한 에러는 그냥 실행시키기 때문에, 이 명령으로 에러를 찾아내기 쉬워진다 */


console.log(Math.random().toFixed(2))

/* 랜덤 함수 만들기 */
function random(min, max) {       /* random() 함수 >> 0~1 까지 난수 생성 */
    return parseFloat((Math.random()*(max-min)+min).toFixed(2))   /* 소수점을 가진 숫자 데이터로 변환해주는 명령 */
}


function floatingObject(selector, delay, size) { /* 3개의 임의의 매개변수 사용 */
    /* selectior 어떤 오브젝트?, delay 시작시간 변화, size 움직이는 거리 */
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        ease: Power1.easeInOut, /* 좀 더 자연스러운 움직임 */
        yoyo: true,
        delay: random(0, delay) /* 0~1 사이 숫자만큼 딜레이 */
    })
    gsap.to(selector, random(1.5, 2.5), {
        x: size,
        repeat: -1,
        ease: Power1.easeInOut,
        yoyo: true,
        delay: random(0, delay)
    })
}




floatingObject('.floating1', 1, 10);
floatingObject('.floating2', 1.5, 20);
floatingObject('.floating3', 2.5, 30);