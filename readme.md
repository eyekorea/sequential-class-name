# seqClass

## seqClass 는 왜 사용하나요?
- document element 에 class 명을 일정 시간동안 순차적으로 넣거나 제거할 때 사용합니다.
- css3 의 `transition` 속성등을 이용해 화면의 레이아웃 구조를 변경하거나 사라지고, 보여지게 할때 유용합니다. 예를들어 아래와 같이 `display:none` 속성인 element 는 `transition` 속성을 변경해도 모션을 줄 수 없습니다. 또한, `display:block` 속성을 함께 주더라도 모션을 기대할 수 없습니다.
```css
/* 아래와 같은 작업물은 모션을 기대할 수 없습니다. */
.element{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: #eee;
    display: none;
    transform: translateX(100%);
    transition: transform .5s ease;
}
.element.active{
    display:block;
    transform: translateX(0);
}
```

- 이때 display:block 속성으로 변경한 뒤, 약 50~100 ms 이후에 active 클래스를 추가 하면 정상적인 움직임을 줄 수 있습니다.
```css
/* 아래와 같은 작업물은 모션을 기대할 수 없습니다. */
.element{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: #eee;
    display: none;
    transform: translateX(100%);
    transition: transform .5s ease;
}
.element.ready{
    display:block;
}
.element.active{
    transform: translateX(0);
}
```
- 이때 `seqClass` 를 사용할 수 있습니다.


## quick start
- 당신의 패키지에 추가 하세요.
`npm install -D sequential-class-name`

- 필요한 js 파일에서 import 하여 사용합니다.
```js
import seqClass from 'sequential-class-name';
const layer = seqClass('.layer');
layer.addClass(['ready','active'], {
    delayTime: 100,
    callback : ()=>{
        console.log('added!!');
    }
});
```

- 아래와 같이 간단하게 사용할 수 있습니다.
```js
seqClass('.layer').addClass(['ready','active']);
```

