import { Injectable } from "../../container"
import { UserAccountInfo } from "./UserManagement.schema"

@Injectable()
export class UserManagementAPI {
    constructor() {}

    public createUser() {
        console.log("created!")

        return
    }

    /**
     * getUserAccount
     */
    public getUserAccount(): UserAccountInfo {
        return { email: "abc@dmail.com", username: "feris" }
    }
}
