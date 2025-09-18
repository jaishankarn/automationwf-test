import { Injectable } from '@nestjs/common';
import { AppInfoDto } from './dto/app-info.dto';
import * as packageJson from '../package.json';

@Injectable()
export class AppService {
  getAppInfo(): AppInfoDto {
    return {
      name: packageJson.name,
      version: packageJson.version,
      description: packageJson.description,
      status: 'running',
      timestamp: new Date().toISOString(),
    };
  }
}