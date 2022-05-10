import { Injectable, Scope } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import { PrismaClient } from '@prisma/client';
import { DbPrismaService } from 'libs/db-prisma';

/**
 * The PrismaHealthIndicator contains health indicators
 * wich are used for health checks related to Prisma.
 *
 * @publicApi
 * @module HealthModule
 */
@Injectable({
  scope: Scope.TRANSIENT,
})
export class PrismaHealthIndicator extends HealthIndicator {
  private readonly prismaClient: PrismaClient;

  constructor(private moduleRef: ModuleRef) {
    super();
    this.prismaClient = new PrismaClient();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    try {
      await this.prismaClient.$queryRaw`SELECT 1`;
      return this.getStatus(key, true);
    } catch (error) {
      throw new HealthCheckError('Prisma health check failed', error);
    }
  }
}
