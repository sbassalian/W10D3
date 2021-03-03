let state = {
    user: "Andy",
    role: "teacher"
};

const changeRoleToStudent = {
    type: "change role",
    newRole: "Student"
};

const changeRoleToJanitor = {
    type: "change role",
    newRole: "Janitor"
};

const changeRoleToPresident = {
    type: "change role",
    newRole: "President"
};


const roleReducer = (oldRole = null, action) => {
    if (action.type === "change role"){
        state.role = action.newRole;
        return action.newRole;
    } else {
        return oldRole;
    }
};

const combineReducers


