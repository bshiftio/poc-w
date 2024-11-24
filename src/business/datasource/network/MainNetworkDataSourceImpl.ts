import MainNetworkService from "@/framework/datasource/network/MainNetworkService";
import MainNetworkDataSource from "./MainNetworkDataSource";

export default class MainNetworkDataSourceImpl
  implements MainNetworkDataSource
{
  constructor(private readonly mainNetworkService: MainNetworkService) {}
}
