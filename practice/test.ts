enum Status {
  Success = 'success',
  Failed = 'failed',
}

interface IPayment {
  sum: number,
  from: number,
  to: number,
}

interface IPaymentSuccessful extends IPayment {
  databaseId: number,
}

interface IError {
  errorMessage: string,
  errorCode: number,
}

interface ISuccessfulResponse {
  status: Status.Success,
  data: IPaymentSuccessful,
}

interface IFailedResponse {
  status: Status.Failed,
  data: IError
}

function get(): ISuccessfulResponse | IFailedResponse {
  // по полю status уже определять какой ответ пришел
}