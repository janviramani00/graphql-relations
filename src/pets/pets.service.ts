import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from '../owners/entities/owner.entity';
import { OwnersService } from '../owners/owners.service';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepositry: Repository<Pet>,
    private ownerServicre: OwnersService,
  ) {}

  createPet(createPetInput): Promise<Pet[]> {
    const newPet = this.petsRepositry.create(createPetInput);
    return this.petsRepositry.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petsRepositry.find();
  }

  findOne(id): Promise<Pet> {
    return this.petsRepositry.findOneOrFail(id);
  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownerServicre.findOne(ownerId);
  }
}
