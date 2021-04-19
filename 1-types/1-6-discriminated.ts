{
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    function login(id: string, password: string): LoginState {
        return {
            result: 'success',
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
        // SuccessState , FailState 둘다 result 라는 공통된 key를 가지고 있으면서 차별화된 타입을 가지고 있어서 비교 가능
        
        // discriminated union을 사용하면 조금 더 직관적인 코드를 작성할 수 있다

        if (state.result === 'success') {
            console.log(`🎉 ${state.response.body}`);
        } else {
            console.log(`😂 ${state.reason}`) 
        }

        // 'discriminated union'을 이용하자! union type에 차별화 되는, 이름이 동일한 type을 둠으로써 간편하게 구분할 수 있는 것을 의미한다.
    }
}