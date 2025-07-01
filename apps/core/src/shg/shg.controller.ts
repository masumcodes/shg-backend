import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ShgService } from './shg.service';
import { CreateShgDto } from './dto/create-shg.dto';
import { UpdateShgDto } from './dto/update-shg.dto';

@Controller()
export class ShgController {
  constructor(private readonly shgService: ShgService) {}

  @MessagePattern('createShg')
  create(@Payload() createShgDto: CreateShgDto) {
    return this.shgService.create(createShgDto);
  }

  @MessagePattern('findAllShg')
  findAll() {
    return this.shgService.findAll();
  }

  @MessagePattern('findOneShg')
  findOne(@Payload() id: string) {
    return this.shgService.findOne(id);
  }

  @MessagePattern('updateShg')
  update(@Payload() updateShgDto: UpdateShgDto) {
    return this.shgService.update(updateShgDto.id, updateShgDto);
  }

  @MessagePattern('removeShg')
  remove(@Payload() id: number) {
    return this.shgService.remove(id);
  }
}
