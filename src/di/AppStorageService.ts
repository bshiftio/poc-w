import AppStorageServiceImpl from "@/framework/datasource/storage/AppStorageServiceImpl";
import IAppStorageService from "./interfaces/IAppStorageService";

export default (storage: Storage): IAppStorageService => {
  return {
    AppStorageServiceImpl: new AppStorageServiceImpl(storage),
  };
};
