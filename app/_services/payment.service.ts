import crypto from 'crypto';

interface Data {
  public_key: string;
  version: string;
  action: string;
  amount: number;
  currency: string;
  description: string;
  order_id: string;
  sender_first_name?: string;
  sender_last_name?: string;
  result_url?: string;
}

export class PaymentService {
  private signature: string = '';
  private basedData: string = '';

  constructor(private data: Data) {
    this.data = data;
  }

  private createBasedData() {
    const stringifyData = JSON.stringify(this.data);
    const latin1CompatibleString = unescape(encodeURIComponent(stringifyData));

    this.basedData = btoa(latin1CompatibleString);
  }

  private createSignString() {
    this.createBasedData();
    return (
      process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY +
      this.basedData +
      process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY
    );
  }

  createSignature() {
    const sha1 = crypto.createHash('sha1');
    sha1.update(this.createSignString());

    this.signature = sha1.digest('base64');
  }

  getSignature() {
    return this.signature;
  }

  getBasedData() {
    return this.basedData;
  }
}
