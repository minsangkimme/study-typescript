{
    /**
     * Union Types: OR
     * 모든 가능한 케이스 중에 발생할 수 있는 경우중 딱 하나의 타입을 담을 수 있게 하고 싶을 때 사용
     * 활용도 높음
     */

    type Direction = 'left' | 'right' | 'up' | 'down'; 
    function move(direaction: Direction) {
        console.log(direaction);
    }

    move('left');

    type TileSize = 8 | 16 | 32; 
    const tile: TileSize = 32; // TileSize type에 정의된 케이스중 한가지만 담을 수 있다.

    // function: login -> success, fail
    
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    function login(id: string, password: string): LoginState {
        return {
            response: {
                body: 'logged in!',
            }
        }
    }
    
    // 과제: 어떻게하면 success 일 때 body 를 fail일 땐 reason을 출력할 수 있을까요?
    // printLoginState(state: LoginState)
    // success -> 🎉body 
    // fali -> 😂reason
    function printLoginState(state: LoginState) {
        
        
        // 💩 이런 방법은 그닥 좋은 방법이 아니다..
        // 그럼 어떤 방법을 이용하면 좋을까요 ? 
        if ('response' in state) {
            console.log(`🎉 ${state.response.body}`);
        } else {
            console.log(`😂 ${state.reason}`) 
        }

        // 'discriminated union'을 이용하자! union type에 차별화 되는, 이름이 동일한 type을 둠으로써 간편하게 구분할 수 있는 것을 의미한다.
    }

}