export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    active?: boolean;
}

export interface Cols {
    title: string;
    cssClass: string;
}