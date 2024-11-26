import { IAppSettingsProvider } from "@/application/providers/IAppSettingsProvider";
import { StorageServiceAdapter } from "./adapters/StorageServiceAdapter";
import { AppSettingsProviderAdapter } from "./adapters/AppSettingsProvider";

export const localStorageAdapter = new StorageServiceAdapter(localStorage);
export const sessionStorageAdapter = new StorageServiceAdapter(sessionStorage);

export const appSettingsProvider: IAppSettingsProvider =
  new AppSettingsProviderAdapter(localStorageAdapter);
