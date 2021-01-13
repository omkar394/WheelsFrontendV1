export interface User{
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    created_date: Date;
}

export interface Vehicle{
    id: number;
    rn1: string;
    rn2: number;
    rn3: string;
    rn4: number;
    brand: string;
    vehicle_model: string;
    wheeler_type: number;
    engine_type: number;
    gear_type: number;
    user_id: User['id'];
    customer_id: Customer['id'];
}

export interface Customer{
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    mobile_number: number;
    email_id: string;
    house_info: string;
    location: string;
    city: string;
    district: string;
    tehsil: string;
    state: string;
    user_id: User['id'];
}

export interface Bill{
    id: number;
    user_id: User;
    bill_date: Date;
}

export interface Service{
    id: number;
    service_name: string;
    service_cost: number;
    gst: number;
}

export interface Transaction{
    id: number;
    customer_id: Customer;
    vehicle_id: Vehicle;
    user_id: User;
    bill_id: Bill;
    service_id: Service;    
    quantity: number;
    per_unit_cost : number;
    gst: number;
    final_cost: number;
    date: Date;
}


export interface decodeToken {
    email: string;
    exp: number;
    orig_iat: number;
    user_id: string;
    username: string;
}
