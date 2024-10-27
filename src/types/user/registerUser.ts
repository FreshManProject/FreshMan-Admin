export interface AdminType {
    email: string;
    password: string;
}
export interface LoginAdminType {
    accessToken: string;
    refreshToken: string;
}

export type AdminEditType = Pick<AdminType, 'email'>;
