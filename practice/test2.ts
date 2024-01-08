interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}
// 1
function isResponseSuccess(response: IDataSuccess | IDataFailed):response is IDataSuccess {
  return 'databaseId' in response;
}
// 2 
function isResponseSuccess2(response: IDataSuccess | IDataFailed):response is IDataSuccess  {
  return (response as IDataSuccess).databaseId !== undefined;
}

// 3 
function isResponseSuccess3(response: IDataSuccess | IDataFailed): IDataSuccess  {
  if(typeof (response as IDataSuccess).databaseId !== undefined) {
    return response as IDataSuccess;
  } else {
    throw new Error('Ответ не успешен');
  }
}

function isCheckSuccessResponse(res: IResponseSuccess | IResponseFailed): res is IResponseSuccess {
  return res.status === PaymentStatus.Success
}

function isSuccessResponse(res: IResponseSuccess | IResponseFailed): number {
  if(isCheckSuccessResponse(res)) {
    return res.data.databaseId;
  }
  throw new Error('Response is not successful');
}


