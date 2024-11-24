import MainNetworkDataSourceImpl from "@/business/datasource/network/MainNetworkDataSourceImpl";
import INetworkDataSources from "./interfaces/INetworkDataSources";
import MainNetworkService from "@/framework/datasource/network/MainNetworkService";

export default (
  mainNetworkService: MainNetworkService
): INetworkDataSources => ({
  MainNetworkDataSourceImpl: new MainNetworkDataSourceImpl(mainNetworkService),
});
