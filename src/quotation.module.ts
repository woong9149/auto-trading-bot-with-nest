import { HttpModule, Module } from '@nestjs/common';
import { QuotationController } from './controller/quotation.controller';
import { QuotationService } from './quotation.service';
import { QuotationRepository } from './repository/quotation.repository';

@Module({
  imports: [HttpModule],
  controllers: [QuotationController],
  providers: [QuotationService, QuotationRepository],
})

export class AppModule {}
