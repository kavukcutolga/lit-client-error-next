import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { NextResponse } from 'next/server';

const litNodeClient = new LitJsSdk.LitNodeClientNodeJs({
  alertWhenUnauthorized: false,
  litNetwork: 'habanero',
});


export async function GET() {
  await litNodeClient.connect();
  return NextResponse.json({ hello: 'Next.js' });
}
