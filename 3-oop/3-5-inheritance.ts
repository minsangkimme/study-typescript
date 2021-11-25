{ 
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // interface는 나랑 의사소통 하려면 이런이러한 규약을 갖고 잇어 나는 이런 행동을 할 수 있어, 계약서 같은 것
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // CoffeeMachine클래스는 CoffeeMaker 터페이스 규격을 따라가는 클래스라서 인터페이스를 구현하는 클래스임
    // 두가지의 인터페이스 규약을 따라가는 클래스
    class CoffeeMachine implements CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; 
      private coffeeBeans: number = 0; 

      constructor(coffeeBeans: number) { // 외부에서 constructor을 사용하지 않게 private로 지정
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

    class CafeLatteMachine extends CoffeeMachine {
        constructor(coffeeBeans: number, public readonly serialNumber: string) {
            // 만약 상속받은 자식 클래스에서 생성자를 추가로 작성한다면 부모 super()를 꼭 호출해줘야 한다.
            // 부모 생성자가 받는 매개변수도 같이 받아서  넘겨줘야 한다.
            // readonly 속성은 한번 할당한 이후에 변경되지 않는다는 의미
            super(coffeeBeans);
        }
        steamMilk():void {            
            console.log('steam milk...🥛');            
        }        

        makeCoffee(shot: number): CoffeeCup {
            const coffee = super.makeCoffee(shot);
            this.steamMilk();
            return  {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    const maker = new CoffeeMachine(23);
    const maker2 = new CafeLatteMachine(33, 'SSE3123E');
    console.log(maker.makeCoffee(1));
    console.log(maker2.makeCoffee(1));
    console.log(maker2.serialNumber);
}