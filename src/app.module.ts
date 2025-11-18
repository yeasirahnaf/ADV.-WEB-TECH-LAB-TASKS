import { Module } from '@nestjs/common';

import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AdminModule,TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '665566',
    database: 'LabTask',
    autoLoadEntities: true,
    synchronize: true,
    })],
  
  
})
export class AppModule {}
