import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { CreateMemberDto } from './dto/creatre.member.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async login(data: { id: string; password: string }) {
    const user = await this.userRepo.findOne({
      where: { id: data.id },
    });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { userId: user.id, designation: user.designation },
      process.env.JWT_SECRET || 'jwtsecret',
    );

    return { token, userId: user.id };
  }

  async addMember(data: CreateMemberDto) {
    const password = Math.random().toString(16).slice(-8);
    const hashedPassword = await bcrypt.hash(password, 10);

    const member = this.userRepo.create({
      name: data.name,
      phoneNumber: data.phoneNumber,
      password: hashedPassword,
      designation: data.designation,
      fatherOrHusbandName: data.fatherOrHusbandName,
      category: data.category,
      disability: data.disability,
      religion: data.religion,
      gender: data.gender,
      accountAvailable: data.accountAvailable,
    });

    await this.userRepo.save(member);
    return {
      id: member.id,
      name: member.name,
      phoneNumber: member.phoneNumber,
      designation: member.designation,
      password,
    };
  }

  async getUserById(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return {
      id: user.id,
      name: user.name,
      phoneNumber: user.phoneNumber,
      designation: user.designation,
    };
  }
}
