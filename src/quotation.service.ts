import { HttpService, Injectable } from "@nestjs/common";

@Injectable()
export class QuotationService {
	constructor(private httpService: HttpService) {}

	private readonly DATA_URL = 'https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=1';
	
	async reqDaysCandles() {
		const candles = await this.httpService.get(this.DATA_URL).toPromise();

		console.log(candles.data);
	}
}
