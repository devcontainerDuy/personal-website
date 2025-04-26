import AdminJS from "adminjs";
import * as AdminJSMongoose from "@adminjs/mongoose";
import AdminJSExpress from "@adminjs/express";
import mongoose from "mongoose";
import User from "../../app/models/users.js";
import localeVi from "../lang/locale-vi.js";

AdminJS.registerAdapter(AdminJSMongoose);

const createAdminPanel = () => {
    const usersNavigation = {
        name: "Users Management",
        icon: "User",
    };

    const admin = new AdminJS({
        databases: [mongoose],
        resources: [
            {
                resource: User,
                options: {
                    navigation: usersNavigation,
                    listProperties: ["name", "email", "role", "lastLogin", "createdAt"],
                    filterProperties: ["name", "email", "role", "lastLogin", "createdAt"],
                    editProperties: ["name", "email", "password", "role"], // create and edit record
                    showProperties: ["name", "email", "role", "lastLogin", "isVerified", "createdAt", "updatedAt"], // show record
                    properties: {
                        password: {
                            type: "password",
                            isRequired: true,
                        },
                    },
                    sort: {
                        sortBy: "createdAt",
                        direction: "desc",
                    },
                },
            },
        ],
        branding: {
            companyName: "Personal Website 👨‍💻",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png", // link logo URL (hoặc base64 cũng được)
            favicon: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png", // (optional)
            withMadeWithLove: false,
            softwareBrothers: false,
        },
        locale: localeVi,
    });

    const adminRouter = AdminJSExpress.buildRouter(admin);

    return { admin, adminRouter };
};

export default createAdminPanel;
