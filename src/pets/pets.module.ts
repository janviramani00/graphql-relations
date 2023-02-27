import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { OwnersModule } from '../owners/owners.module';
import { OwnersService } from '../owners/owners.service';
import { Owner } from '../owners/entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Owner]), OwnersModule],
  providers: [PetsService, PetsResolver, OwnersService],
})
export class PetsModule {}
