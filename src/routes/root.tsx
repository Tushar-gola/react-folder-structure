import { Params, RouteObject } from "react-router-dom";
import { urls } from "./urls";
import { AuthGuard, Main } from "layouts";
import { LoginCallback } from "features";
import { DashboardPage, LoginPage } from "pages";

export type CustomMatchesType = {
    id: string;
    pathname: string;
    params: Params<string>;
    data: unknown;
    handle?: HandleType;
}[];

export type HandleType = {
    crumb: (title?: string) => { label: string };
};

export type RoutePathDefinition = RouteObject & {
    children?: RoutePathDefinition[];
    handle?: HandleType;
};

export const root = [
    {
        path: urls.BASE_URL,
        element: <LoginCallback />,

    },
    {
        path: urls.LOGIN,
        element: <Main />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            }
        ]

    },
    {
        path: urls.DASHBOARD,
        element: <AuthGuard>
            <Main />
        </AuthGuard>,
        handle: {
            crumb: () => ({ label: "Dashboard" }),
        },
        children: [
            {
                index: true,
                element: <DashboardPage/>,
            },
        ]

    }

]