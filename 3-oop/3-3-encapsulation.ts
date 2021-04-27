{ 
    // encapsulation 을 할 때 무엇이 외부에 보여질 값이고 보이면 안되는 값인지 잘 생각하고 만들기
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public 공개적으로 설정된 것 (기본)
    // private 외부에서 볼 수 없고 내부에서만 가능
    // protected 상속을 할 때 외부에서 접근 x 클래스를 상속한 자식에서만 가능

    class CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // static 키워드를 붙이면 class level 클래스와 연결되어 있기 때문에 인스턴스가 생성될 때마다 생성되지 않는 장점이 있다(메모리 낭비 방지)
      private coffeeBeans: number = 0;          
      // coffeeBeans: number = 0; // instance (object) level         

      private constructor(coffeeBeans: number) { // 외부에서 constructor을 사용하지 않게 private로 지정
        this.coffeeBeans = coffeeBeans;        
      }

      static makeMachine(coffeeBeans: number): CoffeeMaker { // constructor 을 사용하지 않고 클래스 레벨에서 생성하는 방법
        return new CoffeeMaker(coffeeBeans);
      }

      makeCoffee(shots: number): CoffeeCup {
        if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
        }

        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        }      
      }

      fillCoffeeBeans(beans: number) {
         if (beans < 0)  {
             throw new Error('value for beans should be greater than 0');
         }
         this.coffeeBeans += beans;
      }
  }
  

  const maker = CoffeeMaker.makeMachine(32); // new CoffeMaker() 를 사용할 수 없다 이유는 해당 클래스 constructor을 private로 지정했기 때문에
                                            //  따로 CoffeeMaker에 class level에 있는 메소드를 사용해서 생성함
  maker.fillCoffeeBeans(2);

  class User {    
    get fullName(): string { 
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('Invalid Number');
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {  // 생성자에 접근제어자를 설정해 두면 바로 멤버변수로 설정이 된다.
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // get은 함수형태 이지만 접근할때는 멤버 변수에 접근하는것처럼 접근해야함
  user.age = 6;
  console.log(user.fullName);
}