import { Injectable } from '@nestjs/common';
import { CreateShgDto } from './dto/create-shg.dto';
import { UpdateShgDto } from './dto/update-shg.dto';
import { ShgEntity } from './entities/shg.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShgService {
  constructor(
    @InjectRepository(ShgEntity)
    private shgRepository: Repository<ShgEntity>,
  ) {}

  async create(createShgDto: CreateShgDto): Promise<ShgEntity> {
    const shg = this.shgRepository.create(createShgDto);
    const savedShg = await this.shgRepository.save(shg);
    return savedShg;
  }

  async findAll(): Promise<ShgEntity[]> {
    return await this.shgRepository.find();
  }

  async findOne(id: string) {
    return await this.shgRepository.findBy({
      groupId: id,
    });
  }

  // TODO: To be implemented
  update(id: number, updateShgDto: UpdateShgDto) {
    return `This action updates a #${id} shg`;
  }

  // TODO: To be implemented
  remove(id: number) {
    return `This action removes a #${id} shg`;
  }
}
