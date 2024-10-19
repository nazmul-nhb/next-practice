import React from "react";

interface ProlesProps {
	params: {
		roles: string[];
	};
}

const RolesPage: React.FC<ProlesProps> = ({ params }) => {
	if (params.roles.length === 3) {
		return <div>{params.roles[2]}</div>;
	}
	if (params.roles.length === 2) {
		return <div>{params.roles[1]}</div>;
	}
	if (params.roles.length === 1) {
		return <div>{params.roles[0]}</div>;
	}

	return <div>User Roles</div>;
};

export default RolesPage;
