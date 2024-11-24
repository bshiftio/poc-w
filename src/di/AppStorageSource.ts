import AppStorageSourceImpl from "@/business/datasource/storage/AppStorageSourceImpl";
import IAppStorageSource from "./interfaces/IAppStorageSource";
import AppStorageService from "@/framework/datasource/storage/AppStorageService";

export default (appStorageService: AppStorageService): IAppStorageSource => {
  return {
    AppStorageSourceImpl: new AppStorageSourceImpl(appStorageService),
  };
};
