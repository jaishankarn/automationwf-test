import { ApiProperty } from '@nestjs/swagger';
import { HealthCheckDto } from './health-check.dto';

class MemoryUsageDto {
  @ApiProperty({
    description: 'Used memory in MB',
    example: 21,
  })
  used!: number;

  @ApiProperty({
    description: 'Total memory in MB',
    example: 24,
  })
  total!: number;

  @ApiProperty({
    description: 'External memory in MB',
    example: 2,
  })
  external!: number;
}

class McpServersDto {
  @ApiProperty({
    description: 'GitHub MCP server status',
    example: 'pending',
    enum: ['pending', 'connected', 'error'],
  })
  github!: string;

  @ApiProperty({
    description: 'Linear MCP server status',
    example: 'pending',
    enum: ['pending', 'connected', 'error'],
  })
  linear!: string;

  @ApiProperty({
    description: 'Claude MCP server status',
    example: 'pending',
    enum: ['pending', 'connected', 'error'],
  })
  claude!: string;

  @ApiProperty({
    description: 'Greptile MCP server status',
    example: 'pending',
    enum: ['pending', 'connected', 'error'],
  })
  greptile!: string;
}

class DependenciesDto {
  @ApiProperty({
    description: 'Database connection status',
    example: 'pending',
    enum: ['pending', 'connected', 'error'],
  })
  database!: string;

  @ApiProperty({
    description: 'Redis connection status',
    example: 'pending',
    enum: ['pending', 'connected', 'error'],
  })
  redis!: string;

  @ApiProperty({
    description: 'MCP servers status',
    type: McpServersDto,
  })
  mcp_servers!: McpServersDto;
}

export class DetailedHealthCheckDto extends HealthCheckDto {
  @ApiProperty({
    description: 'Application environment',
    example: 'development',
    enum: ['development', 'staging', 'production'],
  })
  environment!: string;

  @ApiProperty({
    description: 'Memory usage statistics',
    type: MemoryUsageDto,
  })
  memory!: MemoryUsageDto;

  @ApiProperty({
    description: 'External dependencies status',
    type: DependenciesDto,
  })
  dependencies!: DependenciesDto;
}