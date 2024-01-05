enum StatusCode {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
}

type TReq = {
  topicId: number,
  status?: StatusCode,
} 

type TAnswer = {
  question: string,
  answer: string,
  tags: string[],
  likes: number,
  status: StatusCode,
}

async function getFaqs(req: TReq): Promise<TAnswer[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  });
  const data = await res.json();

  if(data.status && data.status === StatusCode.Published) {
    return data;
  }
  return [];
}