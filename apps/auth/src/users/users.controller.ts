import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @GrpcMethod('AuthService', 'Login')
  // async login(data: { phoneNumber: string; password: string }) {
  //   return this.usersService.login(data.phoneNumber, data.password);
  //   }
  //   @GrpcMethod('AuthService', 'AddMember')
  // async addMember(data: { presidentId: string; name: string; phoneNumber: string; role: string }) {
  //   return this.usersService.addMember(data.presidentId, data.name, data.phoneNumber, data.role);
  // }
}
