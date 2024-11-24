import IUseCases from "./interfaces/IUseCases";
import GetCounterUseCase from "@/business/interactors/getCounterUseCase";
import IncrementUseCase from "@/business/interactors/incrementUseCase";
import DecrementUseCase from "@/business/interactors/decrementUseCase";
import AppStorageSource from "@/business/datasource/storage/AppStorageSource";

export default (appStorageSource: AppStorageSource): IUseCases => {
  return {
    GetCounterUseCase: new GetCounterUseCase(appStorageSource),
    IncrementUseCase: new IncrementUseCase(appStorageSource),
    DecrementUseCase: new DecrementUseCase(appStorageSource),
  };
};
