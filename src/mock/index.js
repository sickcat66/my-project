import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

//会员api
import {
  adapters as member
} from '@/mock/member.js'

let mockAdapter = new MockAdapter(axios)

member.forEach(item => item(mockAdapter))

export default mockAdapter