import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Categories } from 'src/typeorm';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CategoriesService } from './service/categories/categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  controllers: [CategoriesController],
  providers: [CategoriesService, JwtAuthGuard],
})
export class CategoriesModule {}
