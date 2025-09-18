import { Injectable } from '@nestjs/common';
import { HealthCheckDto } from '../dto/health-check.dto';

@Injectable()
export class HealthService {
  async getHealthStatus(): Promise<HealthCheckDto> {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0',
    };
  }

  async getDetailedHealthStatus(): Promise<object> {
    const baseHealth = await this.getHealthStatus();

    return {
      ...baseHealth,
      environment: process.env.NODE_ENV || 'development',
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
        external: Math.round(process.memoryUsage().external / 1024 / 1024),
      },
      dependencies: {
        database: 'pending', // Will be updated when database is connected
        redis: 'pending',    // Will be updated when Redis is connected
        mcp_servers: {
          github: 'pending',
          linear: 'pending',
          claude: 'pending',
          greptile: 'pending',
        },
      },
    };
  }
}