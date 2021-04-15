{
    // Array
    // array 타입을 지정하는건 타입[] 또는 Array<타입> 제네릭으로 하는 2가지 방식이 있다
    // 어떤게 더 좋고 나쁘다 하는건 없고 한가지 차이점을 뽑자면
    const furits: string[] = ['🍅', '🍕'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {}
    // string[] 으로 지정하면 readonly 속성을 사용할 수 있다.
    // Array<string>은 아직은 readonly 속성을 사용할 수 없다
    // readonly 속성은 전달 받은 인자의 불변성을 보장한다. 예를 들어 전달받은 fruits.push() 같은 행위를 하지 못한다.
    // 그래서 오브젝트의 불변성을 보장한다는 것은 굉장히 중요한 이유로 readonly를 자주 사용하고 일관성 있게 코드를 짜기 위해서 
    // string[] 을 더 선호하여 사용한다.

    // Tuple 서로다른 타입을 함께 가질 수 있는 배열을 의미
    // Tuple 비추 💩 대신 사용하는 것  -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123
    const [mame, age] = student; // 튜플의 사용 예 (ex. useState)
    // 내가 무언가를 동적으로 리턴하는데 클래스나 인터페이스로 묶기에 애매하고 동적으로 관련있는 다른 데이터 타입을 묶어서 사용자가 이름을 쓸 경우에는 튜플이 유용하겠지만
    //  그 외에는 일반적인 타입을  type alias 나 interface를 활용할 수 있진 않은지 잘 생각해보고 사용해야 한다.

}