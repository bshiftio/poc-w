import AppStorageSource from "../datasource/storage/AppStorageSource";
import Counter from "../domain/Counter";

export default class IncrementUseCase {
  constructor(private readonly appStorageDataSource: AppStorageSource) {}

  increment(counter: Counter): void {
    counter.value += 1;
    this.appStorageDataSource.set("counter", counter.value.toString());
  }
}
