/*eslint prefer-rest-params: "warn"*/
import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class AppLogger extends ConsoleLogger {
  constructor(context?: any, options = {}) {
    super(context, options);
  }

  log(message: any, ...optionalParams) {
    super.log(message, ...optionalParams);
  }

  error(message: any, ...optionalParams) {
    super.error(message, ...optionalParams);
  }

  warn(message: any, ...optionalParams) {
    super.warn(message, ...optionalParams);
  }

  debug(message: any, ...optionalParams) {
    super.debug(message, ...optionalParams);
  }

  verbose(message: any, ...optionalParams) {
    super.verbose(message, ...optionalParams);
  }
}
