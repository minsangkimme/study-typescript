{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // ★은 둘다 가능한 기능

  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // extends ★
  type ZPositionType = PositionType & { z: number };

  interface ZPostionInterface extends PositionInterface {
    z: number;
  }

    // 😁 interface 만 가능, 기존 Inteface에 새로운 타입속성을 이어서 추가할 수 있다.
  interface PositionInterface {  // x: number, y:number; z: number;
    // z: number;
    }
    
    // 😁 Type 만 가능, Type alias can use computed properties
    type Person = {
        name: string;
        age: number;
    }

    type Name = Person['name']; // string type

    type NumberType = number; //  type alias

    type Direction = 'left' | 'right'; // union type

}
