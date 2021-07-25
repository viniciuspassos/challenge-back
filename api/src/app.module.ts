import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { VideosModule } from "./videos/videos.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Videos } from "./videos/models/video";

@Module({
  imports: [
    VideosModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env["DB_HOST"],
      port: 5432,
      username: process.env["DB_USERNAME"],
      password: process.env["DB_PASSWORD"],
      database: process.env["DB_DATABASE"],
      entities: [Videos],
      logging: false,
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
