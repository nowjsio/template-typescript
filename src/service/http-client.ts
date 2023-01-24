import axios from 'axios';

export default class HttpClient {
  static async getStatue(url: string): Promise<number> {
    try {
      const response = await axios.get(url);
      const { status } = response;
      return status;
    } catch (e) {
      throw new Error('get status error');
    }
  }
}
