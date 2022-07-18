import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsModule } from './organizations/organizations.module';
import { TribesModule } from './tribes/tribes.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { MetricsModule } from './metrics/metrics.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './organizations/organizations.entity';
import { Tribe } from './tribes/tribes.entity';
import { RepositoryEntity } from './repositories/repositories.entity';
import { Metric } from './metrics/metrics.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [
        Organization, 
        Tribe,
        RepositoryEntity,
        Metric
      ],
      synchronize: true,
      logging: true
    }),
    OrganizationsModule, 
    TribesModule, 
    RepositoriesModule, 
    MetricsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true
      })
    },
  ],
})
export class AppModule {}
