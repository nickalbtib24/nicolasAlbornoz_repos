import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsModule } from './organizations/organizations.module';
import { TribesModule } from './tribes/tribes.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [OrganizationsModule, TribesModule, RepositoriesModule, MetricsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
