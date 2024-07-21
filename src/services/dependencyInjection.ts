import { ContentManagementAPI } from "./api/ContentManagement/ContentManagement.api"
import { UserManagementAPI } from "./api/UserManagement/Usermanagement.api"
import { Container } from "./container"
import { SocketService } from "./socket/ClientUDP.socket"

const ApiContainer = new Container().init([
    UserManagementAPI,
    ContentManagementAPI,
    new SocketService({ hostname: "http://localhost", port: 5051 }),
])

export default ApiContainer
