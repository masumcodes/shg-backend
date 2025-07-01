import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sneha',
      database: 'new',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    UsersModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AuthModule {}
