import { NextResponse } from "next/server";

export const setCorsHeaders = <T>(response: NextResponse<T>): NextResponse<T> => {
  response.headers.append('Access-Control-Allow-Origin', '*');
  response.headers.append('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
  response.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Accept');
  return response;
};

