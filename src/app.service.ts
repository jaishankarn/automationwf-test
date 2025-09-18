import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppInfo(): object {
    return {
      name: 'MCP Workflow Automation',
      version: '1.0.0',
      description: 'Automated workflow orchestration between Claude Code, GitHub, Linear, and Greptile using MCP integrations',
      status: 'running',
      timestamp: new Date().toISOString(),
    };
  }
}