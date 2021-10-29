{
    /**
     * Type Assertions 💩 
     * 내가 정말정말 100% 장담할때 타입을 확정하고 캐스팅한다.
     */
    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //😨

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers()!; // 절대절대 숫자배열을 받는다.
    numbers.push(2); //😨
    // !는 절대절대 undefined나 null 이 아니야라고 확신하는 문법
    // 절대적으로 값이 있다고 확신할 때 ! 를 붙여서 확신한다. ? 옵셔널 체이닝이랑 반대되는 의미

    // ! 좋은예 100% 상활일 때 사용함 그 외는 피해서 사용하는게 좋다.
    const button = document.querySelector('class')!;    
}