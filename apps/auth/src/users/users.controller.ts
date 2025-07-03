import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('AuthService', 'Login')
  login(data: any) {
    return this.usersService.login(data);
  }

  @GrpcMethod('AuthService', 'AddMember')
  addMember(data: any) {
    return this.usersService.addMember(data);
  }

  @GrpcMethod('AuthService', 'GetUserById')
  getUserById(data: { id: string }) {
    return this.usersService.getUserById(data.id);
  }
}
