import { IAppSettings } from "@/domain/IAppSettings";
import { IAppSettingsProvider } from "../providers/IAppSettingsProvider";

export class AppSettingsActions {
  private provider: IAppSettingsProvider;

  constructor(provider: IAppSettingsProvider) {
    this.provider = provider;
  }

  async load(): Promise<IAppSettings> {
    return await this.provider.load();
  }

  save(settings: IAppSettings): void {
    this.provider.save(settings);
  }
}
