import { ApiProperty } from '@nestjs/swagger';

export class HealthCheckDto {
  @ApiProperty({
    description: 'Health status',
    example: 'ok',
    enum: ['ok', 'error', 'warning'],
  })
  status!: string;

  @ApiProperty({
    description: 'Timestamp of the health check',
    example: '2025-09-18T05:00:00.000Z',
  })
  timestamp!: string;

  @ApiProperty({
    description: 'Application uptime in seconds',
    example: 3600.123,
  })
  uptime!: number;

  @ApiProperty({
    description: 'Application version',
    example: '1.0.0',
  })
  version!: string;
}