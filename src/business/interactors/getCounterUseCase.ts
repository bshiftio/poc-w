import AppStorageSource from "../datasource/storage/AppStorageSource";
import Counter from "../domain/Counter";

export default class GetCounterUseCase {
  constructor(private readonly appStorageDataSource: AppStorageSource) {}

  async getCounter(): Promise<Counter> {
    const value = await this.appStorageDataSource.get("counter");
    if (value != null) {
      const counter: Counter = {
        value: Number(value),
      };

      return counter;
    }
    return {
      value: 0,
    };
  }
}
