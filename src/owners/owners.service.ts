import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownerRepositery: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepositery.create(createOwnerInput);

    return this.ownerRepositery.save(newOwner);
  }

  findAll() {
    return this.ownerRepositery.find();
  }

  findOne(id) {
    return this.ownerRepositery.findOne(id);
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return this.ownerRepositery.update(id, updateOwnerInput);
  }

  remove(id: number) {
    return this.ownerRepositery.delete(id);
  }
}
