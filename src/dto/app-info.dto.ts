import { ApiProperty } from '@nestjs/swagger';

export class AppInfoDto {
  @ApiProperty({
    description: 'Application name',
    example: 'MCP Workflow Automation',
  })
  name!: string;

  @ApiProperty({
    description: 'Application version',
    example: '1.0.0',
  })
  version!: string;

  @ApiProperty({
    description: 'Application description',
    example: 'Automated workflow orchestration between Claude Code, GitHub, Linear, and Greptile using MCP integrations',
  })
  description!: string;

  @ApiProperty({
    description: 'Application status',
    example: 'running',
    enum: ['running', 'starting', 'stopped'],
  })
  status!: string;

  @ApiProperty({
    description: 'Response timestamp',
    example: '2025-09-18T05:00:00.000Z',
  })
  timestamp!: string;
}