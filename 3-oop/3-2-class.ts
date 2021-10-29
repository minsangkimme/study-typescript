{ 
  // 객체지향 프로그래밍은 프로그램을 객체로 정의해서 객체들끼리 서로 의사소통 하도록 디자인하고 코딩해 나가는 것을 말함.
  // 서로 관련 있는 데이터와 함수를 여러가지 오브젝트로 정의해서 프로그래밍 해나가는 것을 말함.

  // 객체지향의 장점
   // 객체지향은 오브젝트 단위로 만들어 나가기 떄문에 한 곳에서 문제가 생긴다면 관련 있는 오브젝트만 이해하고 수정하면 됨
   // 또 여러 번 반복되는 것이 있다면 관련된 오브젝트를 재사용 할 수 있습니다.
   // 그리고 무언가 새로운 기능이 필요하다면 새로운 오브젝트를 만들면 되니까 확장성도 높아질 수가 있습니다.

	// class는 관련된 속성과 함수를 묶은 것 데이터를 넣어서 Object를 만들 수 있음
  // Object 마다 새로 만들어져야 하는 데이터가 있다면 멤버변수로 만들고 class level 이라면 static을 붙여서 만든다.
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
		  static BEANS_GRAMM_PER_SHOT: number = 7; // static 키워드를 붙이면 class level 클래스와 연결되어 있기 때문에 인스턴스가 생성될 때마다 생성되지 않는 장점이 있다(메모리 낭비 방지)
      coffeeBeans: number = 0; // instance (object) level 

      constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;        
      }

      static makeMachine(coffeeBeans: number): CoffeeMaker { // constructor 을 사용하지 않고 클래스 레벨에서 생성하는 방법
        return new CoffeeMaker(coffeeBeans);
      }

      static makeCoffee(shots: number): CoffeeCup {
              if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                      throw new Error('Not enough coffee beans!');
              }

              this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
              return {
                  shots,
                  hasMilk: false,
              }      
      }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);

}