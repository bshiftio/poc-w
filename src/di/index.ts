import AppStorageService from "./AppStorageService";
import AppStorageSource from "./AppStorageSource";
import NetworkDataSources from "./NetworkDataSources";
import NetworkServices from "./NetworkServices";
import UseCases from "./UseCases";

const cNetworkServices = NetworkServices();
const cNetworkDataSources = NetworkDataSources(
  cNetworkServices.MainNetworkServiceImpl
);

const cAppStorageService = AppStorageService(localStorage);
const cAppStorageSource = AppStorageSource(
  cAppStorageService.AppStorageServiceImpl
);

const cUseCase = UseCases(cAppStorageSource.AppStorageSourceImpl);

export default {
  IncrementUseCase: cUseCase.IncrementUseCase,
  DecrementUseCase: cUseCase.DecrementUseCase,
  GetCounterUseCase: cUseCase.GetCounterUseCase,
};
