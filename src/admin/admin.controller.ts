import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import {  AdminEntity } from './admin.entitiy';
import { AdminDto } from './admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('createuser')
  async createUser(@Body('uniqueId') uniqueId: string, @Body('country') country: string): Promise<AdminEntity> {
    return await this.adminService.createUser(uniqueId, country);
  }
  
  @Patch('update/:id')
    updatePartialAdminUser(@Param('id') id: number, @Body() updatedUser: AdminDto){
        return this.adminService.updateAdminUser(id, updatedUser);
    }

  
  @Get('joiningdate/:joiningDate')
  getUsersByJoiningDate(@Param('joiningDate') joiningDate: Date): Promise<AdminEntity[]> {
      return this.adminService.getUsersByJoiningDate(joiningDate);
  }

  @Get('defaultcountry')
  getUsersWithDefaultCountry(): Promise<AdminEntity[]> {
    return this.adminService.getUsersWithDefaultCountry();
  }

  

}


