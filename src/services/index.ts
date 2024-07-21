import ApiContainer from "./dependencyInjection"
import { UserManagementAPI } from "./api/UserManagement/Usermanagement.api"
import { ContentManagementAPI } from "./api/ContentManagement/ContentManagement.api"

const UserManagementService = ApiContainer.get(UserManagementAPI)
const ContentManagementService = ApiContainer.get(ContentManagementAPI)
const SocketUDPService = ApiContainer.get(ContentManagementAPI)

export { UserManagementService, ContentManagementService, SocketUDPService }
