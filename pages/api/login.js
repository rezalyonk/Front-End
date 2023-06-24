import axios from 'axios';
import Cookies from 'js-cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      const response = await axios.post('https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/login', {
        email,
        password,
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}