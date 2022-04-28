{
  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network!!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch {
        // try catch 문을 사용할 때 과연 이곳에서 의미있는 에러 처리를 할 수 있는지 고민해보기
        // application 단에서 catch 처리를 하면 사용자에게 modal 같은 것을 보여 줄 수 있다.
        // 의미있는 에러처리를 할 수 있기 떄문  가장 우아하게 처리할 수 있는 곳에서 catch 해야함.  
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();
}
