import { IGeocodeSearchApiGetParams } from './../../../services/api/here/GeocodeSearchApi';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'redaxios';

const endpoint = 'https://geocode.search.hereapi.com/v1/geocode';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const query = req.query as IGeocodeSearchApiGetParams;

    try {
      const response = await axios.get(endpoint, {
        params: {
          apiKey: process.env.HERE_API_KEY,
          ...query,
        },
      });

      return res.status(200).json(response.data);
    } catch (error: any) {
      return res.status(400).json(error.data);
    }
  }

  return res.status(400).json({});
}
