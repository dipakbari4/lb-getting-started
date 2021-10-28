import {get} from '@loopback/rest';
export class HelloController {
  @get('/hello')
  hellow(): string {
    return 'Hello world!';
  }
}
