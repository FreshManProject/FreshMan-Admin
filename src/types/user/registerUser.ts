export interface UserType {
    name: string;
    phone: string;
    address: string;
    addressDetail: string;
    email: string;
    initialized?: boolean;
}

export type UserEditType = Pick<UserType, 'name' | 'phone' | 'email'>;
export type UserEditAddressType = Pick<UserType, 'addressDetail' | 'address'>;
