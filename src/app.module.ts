import { Module } from '@nestjs/common';
import { TestService } from './test/test.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { TestController } from './test/test.controller';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'mahmud.db.elephantsql.com',
    port: 5432,
    username: 'xpyewumx',
    password: 'Grgkp2lNx7OrLKeuJqeDW7KInPARHaNF',
    database: 'xpyewumx',
    entities: [],
    synchronize: true,
  }),TestService, FormsModule],
  controllers: [TestController],
  providers: [TestService],
})
export class AppModule {}
