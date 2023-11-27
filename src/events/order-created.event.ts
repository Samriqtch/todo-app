/* eslint-disable prettier/prettier */
export class OrderCreatedEvent {
  constructor(public readonly data: { orderId: number; payload: any }) {}
}
