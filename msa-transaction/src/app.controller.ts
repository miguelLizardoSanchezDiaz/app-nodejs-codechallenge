import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller('transaction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('yapev2_transaction_created')
  handleTransactionCreated(data:any){
    this.appService.handleTransactionCreated(data)
  }
}
