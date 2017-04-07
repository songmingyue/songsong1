import { createClient } from 'then-redis'

const clientRedis = createClient({
  host: '192.168.99.100',
  port: 32768
})

export default {clientRedis}
