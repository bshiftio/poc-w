import AppStorageSource from "../datasource/storage/AppStorageSource";
import Counter from "../domain/Counter";

export default class DecrementUseCase {
  constructor(private readonly appStorageDataSource: AppStorageSource) {}

  decrement(counter: Counter): void {
    if (counter.value > 0) {
      counter.value -= 1;
      this.appStorageDataSource.set("counter", counter.value.toString());
    }
  }
}
