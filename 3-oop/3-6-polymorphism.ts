{ 
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
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

    class SweetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,       
                hasSugar: true,         
            }
        } 
    }

    // CafeLatteMachine, SweetCoffeeMaker 클래스는 CoffeeMachine를 상속받고
    // CoffeeMachine 클래스는 CoffeeMaker interface를 구현한다.
    // 고로 CafeLatteMachine, SweetCoffeeMaker는 부모클래스 제공되는 메서드 외에 CoffeeMaker(interface)로 규약된 정보만을 표현할 수도 있다.
    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CafeLatteMachine(16, 'serialNumber33'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CafeLatteMachine(16, 'serialNumber44'),
        new SweetCoffeeMaker(16),
    ];

    machines.forEach(machine => {
        console.log('------------------------');
        console.log(machine.makeCoffee(1));        
    });
}