interface IRequest {
  getRequest(id: number): Promise<IRequestDetail | undefined | void>
}

interface IRequestDetail {
  id: number;
}

<<<<<<< HEAD
=======

>>>>>>> 29f37037260240cd78ee27733d39f044bc25784e
class RequestAPI implements IRequest {
  async getRequest(id: number): Promise<IRequestDetail | undefined | void> {
    try {
      const res = await fetch('https://dummyjson.com/products/1')
        .then((response) => response.json())
        .then((data) => console.log(data))
      return res;
    }
<<<<<<< HEAD
=======

>>>>>>> 29f37037260240cd78ee27733d39f044bc25784e
    catch (e) {
      console.log(e);
    }
  }
}

class RequestAccessProxy implements IRequest {
  constructor(private api: RequestAPI, private id: number) { }
  async getRequest(id: number): Promise<IRequestDetail | undefined | void> {
    if (this.id < 10) {
      return await this.api.getRequest(id);
    } else {
      console.log('Ошибка получения данных');
      return undefined;
    }
  }
}