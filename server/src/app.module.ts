import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { TweetsModule } from './tweets/tweets.module';
import { ConversationsModule } from './conversations/conversations.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      // instead of specifying array of entities
      autoLoadEntities: true,
      // sync typeorm entities with db, should be disabled on prod
      synchronize: true,
    }),
    CommonModule,
    UsersModule,
    TweetsModule,
    ConversationsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
