import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideosController } from './videos.controller';

@Module({
    controllers:[VideosController],
    providers:[VideoService]
})
export class VideosModule {}
