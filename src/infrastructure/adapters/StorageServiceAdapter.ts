import { IStorageService } from "@/application/services/IStorageService";

export class StorageServiceAdapter implements IStorageService {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  get<T>(key: string): T | null {
    const data = this.storage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  set<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }
}
