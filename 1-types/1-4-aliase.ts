 {
    /**
     * Type Aliases
     */

    // type 키워드를 이용해 원시타입, 레퍼런스 타입의 type alias를 적용할 수 있다.
    type Text = string;

    const name: Text = 'bob';
    const address: Text = 'korea';
    type Num = Number;
    type Student = {
        name: string;
        age: number;
    }    
    const student: Student = {
        name: 'bob',
        age: 12
    }

    /**
     *  String Literal Types
     */

    type Name = 'name'; 
    let bobName: Name;
    bobName = 'name'; // 'name' 만 할당 가능
    type JSON = 'json';
    const json: JSON = 'json';      // 'json'만 할당 가능

    type Boal = true;
    const isCat: Boal = true; // treu 만 할당 가능     

 }