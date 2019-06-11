[![Build Status](https://travis-ci.org/eyekorea/sequential-class-name.svg?branch=master)](https://travis-ci.org/eyekorea/sequential-class-name)

# seqClass
웹 브라우저에서 dom 에 클래스를 순차적으로 넣거나 제거할때 사용할 수 있습니다.

## installation
- npm
```sh
npm install sequential-class-name --save
```
- yarn
```sh
yarn add sequential-class-name
```

### javascript
```js
// import sequential-class-name
import seqClass from 'sequential-class-name';

const layer = seqClass('.layer');
layer.addClass(['ready','active'], {
    delayTime: 100,
    callback : ()=>{
        console.log('added!!');
    }
});

// quick use
seqClass('.layer', 100).addClass(['ready','active'], {
    callback : ()=>{
        console.log('added!!');
    }
});

```

### use
- seqClass(`selector`, `defaultDelayTime`)
    - `selector` : type[string] , document selector (ex : '.class' , '#id') 
    - `defaultDelayTime` : optional / type[number] / default[100], 기본적으로 클레스를 추가하거나 삭제 할때 지정되는 ms. 

### methods
- seqClass.addClass( `classList`, `option` )
    - 클래스를 추가 합니다.
    - `classList` : type[ string[]|string ] , 배열로 넘기면 0번 부터 순서대로 추가 합니다.
    - `option` : 
        - `delayTime` : type[ number ] , 순차적으로 추가될 시간을 지정합니다. (없으면 기본 시간을 사용합니다.)
        - `callback` : type [ function ] , 모든 클래스가 추가된 뒤 해당 함수를 실행합니다.  
- seqClass.removeClass( `classList`, `option` )
    - 클래스를 제거 합니다.
    - `classList` : type[ string[]|string ] , 배열로 넘기면 0번 부터 순서대로 제거 합니다.
    - `option` : 
        - `delayTime` : type[ number ] , 순차적으로 제거될 시간을 지정합니다. (없으면 기본 시간을 사용합니다.)
        - `callback` : type [ function ] , 모든 클래스가 제거된 뒤 해당 함수를 실행합니다.  
- seqClass.clear()
    - 진행중인 모든 타이머를 제거 합니다.
    - 해당 메서드가 실행되는 시점에서 정지 됩니다.

### test
- [parcel](https://parceljs.org/) 을 사용해 테스트 할 수 있습니다.
```sh
npm install -g parcel
npm start
```

### why?
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