import { io } from 'socket.io-client'

const socket = io('http://172.23.253.127:9000')

export default socket