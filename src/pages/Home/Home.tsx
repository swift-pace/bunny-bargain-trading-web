import React from "react";
import { UserManagementService, ContentManagementService } from "@Services";

function Home() {
    const { createUser, getUserAccount } = UserManagementService;
    const { createContent } = ContentManagementService;

    const handleCreateUser = () => {
        createUser();
        createContent();
        const userAccountInfo = getUserAccount();
        console.log(userAccountInfo);
    };

    return (
        <React.Fragment>
            <span className="text-6xl font-bold underline">Home Page</span>
            <br />
            <button onClick={() => handleCreateUser()}>Click</button>
        </React.Fragment>
    );
}

export default Home;
