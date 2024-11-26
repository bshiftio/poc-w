// src/infrastructure/adapters/AppSettingsProviderAdapter.ts
import { IAppSettingsProvider } from "../../application/providers/IAppSettingsProvider";
import { IAppSettings } from "../../domain/IAppSettings";
import { IStorageService } from "../../application/services/IStorageService";

const STORAGE_KEY = "appSettings";

export class AppSettingsProviderAdapter implements IAppSettingsProvider {
  private storageService: IStorageService;

  constructor(storageService: IStorageService) {
    this.storageService = storageService;
  }

  async load(): Promise<IAppSettings> {
    const data = this.storageService.get<IAppSettings>(STORAGE_KEY);
    return (
      data || {
        theme: "light", // Default theme
        notificationsEnabled: true, // Default notifications setting
        autoUpdate: true, // Default auto-update setting
      }
    );
  }

  save(settings: IAppSettings): void {
    this.storageService.set(STORAGE_KEY, settings);
  }
}
