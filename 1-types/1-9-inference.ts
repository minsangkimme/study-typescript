{
    /**
     * Type Inference (타입 추론)
     * 웬만하면 타입추론에 의지하기보다 명시하는게 좋다.
     * 너무 뻔한 원시타입 경우 생략하기도 하지만 함수경우 명시하는게 좋다.
     */

    let text = 'hello';
    function print(message = 'hello') {
        console.log(message);
    }

    print('hello');


    // 리턴 값 타입이 number라고 유추한다.
    function add(x: number, y: number) {
        return x + y;
    }

    const result = add(1,2);

}