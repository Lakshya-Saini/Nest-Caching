import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getUsers() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'get',
    });
    const json_data = await data.json();
    return json_data;
  }
}
