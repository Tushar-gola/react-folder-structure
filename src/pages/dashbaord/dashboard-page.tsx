import { useMatches } from "react-router-dom";
import { CustomMatchesType, HandleType } from "routes";
export const DashboardPage = () => {
    const matches = useMatches() as CustomMatchesType
    const isHandleDefined = (match: { handle?: HandleType }): match is CustomMatchesType[number] & { handle: HandleType } =>
        !!match.handle;
    const filteredMatches = matches.filter(isHandleDefined);
    console.log(filteredMatches, "kkkkkkkkkkkkk");
    return (
        <div>dashboard-page</div>
    )
}
