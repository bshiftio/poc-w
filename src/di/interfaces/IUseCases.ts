import DecrementUseCase from "@/business/interactors/decrementUseCase";
import GetCounterUseCase from "@/business/interactors/getCounterUseCase";
import IncrementUseCase from "@/business/interactors/incrementUseCase";

export default interface IUseCases {
  GetCounterUseCase: GetCounterUseCase;
  IncrementUseCase: IncrementUseCase;
  DecrementUseCase: DecrementUseCase;
}
