import axios from 'axios'

const API_URL = '//jsonplaceholder.typicode.com/users'

const getAll = async () => (await axios.get(API_URL).then(r => r.data)) || []

const apiCalls = {
  getAll,
}

export default apiCalls
