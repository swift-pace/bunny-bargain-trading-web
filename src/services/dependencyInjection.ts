import { ContentManagementAPI } from "./api/ContentManagement/ContentManagement.api"
import { UserManagementAPI } from "./api/UserManagement/Usermanagement.api"
import { Container } from "./container"

const ApiContainer = new Container().init([
    UserManagementAPI,
    ContentManagementAPI,
])

export default ApiContainer
