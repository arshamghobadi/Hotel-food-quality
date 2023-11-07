import prisma from '../../../../lib/prismadb';
import { IncomingHttpHeaders } from 'http';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Webhook, WebhookRequiredHeaders } from 'svix';
import { buffer } from 'micro';
export const config = {
  api: {
    bodyParser: false,
  },
};
const webhookSecret = process.env.WEBHOOK_SECRET || '';
async function handler(request: any, response: any) {
  const payload = (await buffer(request)).toString();
  const headersList = headers();
  const heads = {
    'svix-id': headersList.get('svix-id'),
    'svix-timestamp': headersList.get('svix-timestamp'),
    'svix-signature': headersList.get('svix-signature'),
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event;
  } catch (err) {
    console.log((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = evt.type;
  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, ...attributes } = evt.data;
    console.log(attributes);

    await prisma?.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        attributes,
      },
      update: { attributes },
    });
  }

  type EventType = 'user.created' | 'user.updated' | '*';

  type Event = {
    data: Record<string, string | number>;
    object: 'event';
    type: EventType;
  };
  return NextResponse.json({}, response);
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
