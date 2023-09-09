import { io } from "socket.io-client";
const socket = io("http://localhost:8000", {
  transports: ["websocket"],
  auth: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

export default socket;
