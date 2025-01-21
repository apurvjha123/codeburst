import { io } from 'socket.io-client'

const socket = io('http://172.21.220.137:9000')

export default socket