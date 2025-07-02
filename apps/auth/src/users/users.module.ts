import { DynamicModule, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class UsersModule {
  static register(): DynamicModule {
    return {
      module: UsersModule,
      imports: [
        ConfigModule,
        TypeOrmModule.forFeature([User]),
        ClientsModule.registerAsync([
          {
            name: 'USER_SERVICE',
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
              const url = config.get<string>('USER_SERVICE_URL')!;
              const pkg = config.get<string>('USER_SERVICE_PACKAGE')!;
              const protoPath = config.get<string>('USER_SERVICE_PROTO_PATH')!;
              return {
                transport: Transport.GRPC,
                options: {
                  url,
                  package: pkg,
                  protoPath,
                },
              };
            },
          },
        ]),
      ],
      controllers: [UsersController],
      providers: [UsersService],
      exports: [UsersService],
    };
  }
}
