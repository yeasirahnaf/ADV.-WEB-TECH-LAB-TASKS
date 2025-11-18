import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  AdminEntity } from './admin.entitiy';
import { Repository } from 'typeorm';
import { AdminDto } from './admin.dto';

@Injectable()
export class AdminService {
  constructor(@InjectRepository(AdminEntity)
  private readonly userRepository: Repository<AdminEntity>){}
  

  async createUser(uniqueId: string, country: string = 'Unknown'): Promise<AdminEntity> {
    return this.userRepository.save({ uniqueId, country });
  }

  async updateAdminUser(id: number, updatedadminUser: AdminDto): Promise<AdminEntity> {
    const res = this.userRepository.update(id, updatedadminUser);
    return await this.userRepository.findOneBy({id:id});
}

  getUsersByJoiningDate(joiningDate: Date): Promise<AdminEntity[]> {
    return this.userRepository.find({ where: { joiningDate } });
  }

  getUsersWithDefaultCountry(): Promise<AdminEntity[]> {
    return this.userRepository.find({ where: { country: 'Unknown' } });
  }

}
