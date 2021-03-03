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


const roleReducer = (state = {}, action) => {
    if (action.type === "change role"){
        
        return [...state, action.newRole];
    } else {
        return state;
    }
};

const nameReducer = (state = {}, action) => {
    if (action.type === "change name"){
        return[...state, action.newName]
    }else {
        return state;
    }
}
let obj ={ name: nameReducer, 
    role: roleReducer }

const combineReducers = (object) => {

}


