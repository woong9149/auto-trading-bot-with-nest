import { Controller, Get } from "@nestjs/common";
import { QuotationService } from "src/quotation.service";
import { QuotationRepository } from "src/repository/quotation.repository";

@Controller('quotation')
export class QuotationController {
	constructor(
		private readonly quotationRepository: QuotationRepository,
		private readonly quotationService: QuotationService
	) {}

	@Get('candles/days')
	async getDaysCandles() {
		const candles = await this.quotationService.reqDaysCandles();
		return candles;
	}
}
