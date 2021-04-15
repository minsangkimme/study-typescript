{
    // javascript 💩
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // typescript✨
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // javascript💩
    // function jsFetchNum(id) {
    //     // code...
    //     // code...
    //     // code...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }


    // // typescript✨
    // // 숫자를 fetch하는 함수인데 인자로는 string 타입의 id를 받아서 Promise로 리턴하는구나 fetch가 완료되면 숫자를 리턴하겠구나 하고 알 수 있다
    // function fetchNum(id: string):Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // javascript ✨=> typescript
    // Optional parameter
    // 인자에 ?를 붙이면 옵셔널한 인자로 받을 수 있다.
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }

    printName('bob', 'Jobs');
    printName('bob');


    // default parameter
    function printMessage(message: string = 'Hello Default') {
        console.log(message);
    }

    printMessage();

    // Rest Parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumbers(1,2,3))
    console.log(addNumbers(1,2,3,4,5))
    console.log(addNumbers(1,2,3,4,5,6,7,8))

}