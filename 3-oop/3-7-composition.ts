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

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        makeSugaer(cup: CoffeeCup): CoffeeCup
    }

    // CoffeeMachine클래스는 CoffeeMaker 터페이스 규격을 따라가는 클래스라서 인터페이스를 구현하는 클래스임
    // 두가지의 인터페이스 규약을 따라가는 클래스

    //싸구려 우유 거품기
    class CheapMilkMixer implements MilkFrother{
        private steamMilk(): boolean {
            console.log('get some milk ... 🥛');
            return true;
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {      
            const milk = this.steamMilk();                  
            return  {
                ...cup,
                hasMilk: milk,
            }
        }
    }
    class ColdMilkMixer implements MilkFrother{
        private steamMilk(): boolean {
            console.log('get some cold milk ... 🥛');
            return true;
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {      
            const milk = this.steamMilk();                  
            return  {
                ...cup,
                hasMilk: milk,
            }
        }
    }

    // 설탕 제조기
    class AutomaticSugarMaker implements SugarProvider {
        private getSugar(): boolean {
            console.log('get some from candy..🍭');
            return true;
        }

        makeSugaer(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    // 설탕 x
    class NoSugar implements SugarProvider {
        makeSugaer(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }


    // 커피머신
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; 
        private coffeeBeans: number = 0; 
  
        constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) { // 외부에서 constructor을 사용하지 않게 private로 지정
          this.coffeeBeans = coffeeBeans;        
        }
  
        static makeMachine(coffeeBeans: number, milk: MilkFrother, sugar: SugarProvider): CoffeeMachine { // constructor 을 사용하지 않고 클래스 레벨에서 생성하는 방법
          return new CoffeeMachine(coffeeBeans, milk, sugar);
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.makeSugaer(coffee);
            return this.milk.makeMilk(sugarAdded);
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
  
    // class CafeLatteMachine extends CoffeeMachine {

    //     constructor(coffeeBeans: number, public readonly serialNumber: string, private milk: CheapMilkMixer) {            
    //         super(coffeeBeans);            
    //     }       

    //     makeCoffee(shot: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shot);            
    //         return this.milk.makeMilk(coffee);
    //     }
    // }

    // class SweetCoffeeMaker extends CoffeeMachine {
    //     constructor(beans: number, private sugar: AutomaticSugarMaker) {
    //         super(beans);
    //     }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots);
    //         return this.sugar.makeSugaer(coffee);
    //     }         
    // }

    // class SweetCafeLatteMachine extends CoffeeMachine {
    //     constructor(beans: number, private milk: CheapMilkMixer, private sugar: AutomaticSugarMaker) {
    //         super(beans);
    //     }

    //     makeCoffee(coffeeBeans: number): CoffeeCup {
    //         const coffee = super.makeCoffee(coffeeBeans);
    //         const addedSugar = this.sugar.makeSugaer(coffee);
    //         return this.milk.makeMilk(addedSugar);
    //     }
    // }
    
    // 우유
    const cheapMilk = new CheapMilkMixer();
    const coldMilk = new ColdMilkMixer();

    // 설탕
    const candySugar = new AutomaticSugarMaker();
    const noSugar = new NoSugar();

    // 커피머신
    const maker = new CoffeeMachine(16, cheapMilk, candySugar);
    const maker2 = new CoffeeMachine(16, coldMilk, noSugar);
    console.log(maker.makeCoffee(1));
    console.log(maker2.makeCoffee(1));
  

    /**
     * composition은 상속을 하기전에 생각해볼 수 있는 대안입니다.
     * composition은 한 클래스에서 다른 클래스를 상속하는 대신 다른 클래스를 포함하는 클래스 간의 관계 유형 입니다.
     * composition은 더 유연하고 느슨하게 결합된 프로그램을 만들 수 있기 때문에 상속보다 선호되어야 합니다.
     * 예를 들어 "동물" 클래스가 있고 이것을 상속 받는 "개", "고양이" 클래스가 있습니다.
     * "동물" 클래스는 "먹는다", "걷다" 를 제공합니다. 상속받은 "개","고양이" 는 당연히 해당 기능을 사용할 수 있습니다.
     * 그런데 여기서 "물고기" 라는 동물이 추가 된 경우 어떻게 해야할지? 고민이 생깁니다.     
     * 이 고민을 해결하기 위해서는 계층구조를 변경해야 합니다.
     * "동물" 클래스를 상속받는 "포유류" 라는 클래스를 다시 만들어 "포유류" 클래스를 상속받는 "개", "고양이" 로 수정이 되어야 하는 번거로움이 발생합니다.
     * is-a (~이다) 관계에서 -> has-a(~소유,포함하다) 관계로 변경된다면 현재 문제점을 개선시킬 수 있습니다.
     * "동물"은 "먹는다" 라는 기능만 갖고 있고, "걷다", "수영하다", "날다" 등등의 기능을 독립적인 클래스로 분리한뒤
     * "개", "고양이" 는 "동물" 클래스를 상속받으면서 내부적으로 "걷다"를 선언하여 소유하는 방식으로 하게 된다면 상속의 문제점을 해결할 수 있습니다.
     * "물고기" 는 "동물" 클래스를 상속받으면서 내부적으로 "수영하다"를 선언하여 소유하는 방식으로 하게 된다면 상속의 문제점을 해결할 수 있습니다.
     * 이런것을 composition 이라 합니다.
     * 
     *  inheritance(상속)
     *    - 장점: 재사용 가능한 코드, 이해하기 쉬운
     *    - 단점: 밀접하게 결합되고 취약하며 남용될 수 있음
     * 
     *  composition(구성)
     *   - 장점: 재사용 가능한 코드, 유연성, 느슨하게 결합됨
     *   - 단점: 이해하기 어려움
     * 
     */
    
    
    
    
    
    
    
    
    
    
    
    
    //  
}