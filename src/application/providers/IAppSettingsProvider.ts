import { IAppSettings } from "@/domain/IAppSettings";

export interface IAppSettingsProvider {
  load(): Promise<IAppSettings>;
  save(settings: IAppSettings): void;
}
