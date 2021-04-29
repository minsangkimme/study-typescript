{ 
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // interface는 나랑 의사소통 하려면 이런이러한 규약을 갖고 잇어 나는 이런 행동을 할 수 있어, 계약서 같은 것
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }


    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    // CoffeeMachine클래스는 CoffeeMaker 터페이스 규격을 따라가는 클래스라서 인터페이스를 구현하는 클래스임
    // 두가지의 인터페이스 규약을 따라가는 클래스
    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; 
      private coffeeBeans: number = 0; 

      private constructor(coffeeBeans: number) { // 외부에서 constructor을 사용하지 않게 private로 지정
        this.coffeeBeans = coffeeBeans;        
      }

      static makeMachine(coffeeBeans: number): CoffeeMachine { // constructor 을 사용하지 않고 클래스 레벨에서 생성하는 방법
        return new CoffeeMachine(coffeeBeans);
      }

      private grindBeans(shots: number) {
          console.log(`grinding beans for ${shots}`);
          if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
          }
         
          this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      }

      private preheat(): void {
          console.log('heating up... ❤');
      }

      private extract(shots: number): CoffeeCup {
          console.log(`Pulling ${shots} shots... 🎉`);
          return {
              shots,
              hasMilk: false,
          }
      }

      makeCoffee(shots: number): CoffeeCup {
          this.grindBeans(shots);
          this.preheat();
          return this.extract(shots);
      }

      fillCoffeeBeans(beans: number) {
         if (beans < 0)  {
             throw new Error('value for beans should be greater than 0');
         }
         this.coffeeBeans += beans;
      }

      clean() {
          console.log('cleaning the machine... ✨');
      }
  }

  class AmateurUser {
      constructor(private machine: CoffeeMaker)  {}
      makeCoffee() {
          const coffee = this.machine.makeCoffee(2);
          console.log(coffee);
      }
  }

  class ProBarista {
      constructor(private machine: CommercialCoffeeMaker) {}
      makeCoffee() {
          const coffee = this.machine.makeCoffee(1);
          console.log(coffee);
          this.machine.fillCoffeeBeans(45);
          this.machine.clean();
      }
  }
  

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32); // 타입을 CoffeeMachine(구현체)로 받게 되면 해당 Object에 있는 public 한 함수들에 전부 접근이 가능하지만.                     
//   maker.fillCoffeeBeans(2);  
//   maker.makeCoffee(2);

  // 위처럼 Object로 타입을 받지않고 다시 인터페이스로 (CommercialCoffeeMaker)로 타입을 제한해서 받게 되면
  // 인터페이스에서 정의한 애들만 사용가능하다.
  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32); // CoffeeMachine이라는 것은 CoffeeMaker 인터페이스를 구현한 아이여서 CoffeeMachine 과 CoffeeMaker 은 동일하다고 말할 수 있다.                             

//   maker2.fillCoffeeBeans(2);  // 하지만 CoffeeMaker 안에는 makeCoffee라는 기능밖에 없기 때문에 fillCoffeeBeans 기능은 
                              // 인터페이스에 정의되지 않은 기능이라서 사용할 수 없다 -> 인터페이스를 사용하면 얼마만큼의 행동을 약속할 건지, 보장할건지, 허용할건지 정할 수 있다.
//   maker2.makeCoffee(2);
//   maker2.clean();

console.log('maker', maker)

  const amateur = new AmateurUser(maker);
//   amateur.makeCoffee();
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}