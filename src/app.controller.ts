import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get application info' })
  @ApiResponse({
    status: 200,
    description: 'Returns application information',
    example: {
      name: 'MCP Workflow Automation',
      version: '1.0.0',
      description: 'Automated workflow orchestration API'
    }
  })
  getAppInfo(): object {
    return this.appService.getAppInfo();
  }
}