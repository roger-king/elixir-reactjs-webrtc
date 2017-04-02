"use strict";

interface User {
    username: string,
    email: string,
    isOnline: boolean,
    status: string
}

const INITIAL_STATE: User = {
    username: "undefined",
    email: "undefined",
    isOnline: false,
    status: "offline"
};


