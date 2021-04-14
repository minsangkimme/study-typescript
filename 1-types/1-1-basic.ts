{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array ...
     */

    // number
    const num:number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const bool:boolean = true;

    // undefined 아무런 값이 결정되지 않은 상태
    let age1: undefined; // 💩
    let age2: number | undefined;  // 옵셔널 타임일 때 이런식으로 많이 사용 number 타입 또는 undefined 로 지정
    // 데이터 타입이 있거나 아직 정해지지 않았거나 할 때 사용
    age2 = undefined;
    age2 = 1;
    
    // 무언가를 찾는 함수가 있고 무언가를 찾았다면 숫자를 리턴하고 찾지 못하였다면 undefined를 리턴하는 예제
    // 무언가 있고 없을 때 undefined를 사용합니다/
    function find(): number | undefined {
        return 1;
    }
    

    // null 결정되어 명확하게 비어있는 상태
    /// 값이 있거나 없거나
    let person1: null; // 💩
    let person2: string | null;

    //unknown 어떤 타입으로 결정될지 모르는 상태의 타입 (동적 타입) 💩
    let notSure: unknown = 0;
    notSure = true;
    notSure = 'he';

    // any 어떤 것이든 담을 수 있는 타입 💩
    let anything: any = 0;
    anything = 'he';

    // unknown 과 any 타입은 가능한 사용하지 않는 것을 권장하고 정말 불가피한 경우 (ex.타입을 더할 수 있는 방법이 정말 없을 때)에 사용

    // void 아무런 것도 리턴하지 않을 때 사용하는 타입 
    // void 경우는 리턴 타입을 생략가능한데 프로젝트나, 회사의 정책에 따라 결정하면 됨
    function print(): void {
        console.log('hello');
        return;
    }

    // never 절대 리턴할 수 없는 타입
    // never사용 예: 정말 예상치 못하거나 핸들링 할 수 없는 에러가 발생했을 때 호출할 수 있는 함수
    function throwError(message: string): never {
        // message -> server 로 전송하여 log를 남기고
        throw new Error(message); // 에러를 던지면 어플리케이션이 죽게된다.
        // 어플리케이션이 죽게되면 리턴하는 값이 없기 때문에 never 타입 이라고 명시하면서 리턴할 값이 없으니까 감안해서 코딩하도록 명시함
        // while(true) {

        // }
    }

    // object 원시(primitive)타입을 제외한 모든 오브젝트 타입
    let obj: object; // 💩 object 타입을 구체적으로 어떤 오브젝트 타입인지 명시하는게 좋음 이렇게 사용하는건 비추😡
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'bob'});
    acceptSomeObject([]);


}