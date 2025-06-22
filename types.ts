export interface Medicine {
    _id: string;             
    drug_name?: string;        
    strength?: string;       
    indication?: string;       
}

export interface MedicineData{
    id: number;
    sub_category:string;
    product_name:string;
    salt_composition:string;
    product_price:string;
    product_manufacturer:string;
    medicine_desc:string;
    side_effects:string;
    drug_interactions:string;
}

export interface UserDetails {
    id: string;
    first_name?: string;  
    last_name?: string;   
    avatar_url?: string;
    gender?: string;      
    dateOfBirth?: string; 
}

export interface Kendra {
    state?: string;
    district?: string;
    blocks?: string;
    address?: string;
    pincode?: number;
    contact_person?: string;
    contact_details?: string;
    fts?: string; 
}

export interface Doctor {
    id: number;
    district: string;
    name: string;
    number: string;
    ehrms: string;
    qualifications: string;
    posting: string;
    facility_type: string;
    block: string;
  }

  export interface Hospital {
    id: number;
    coordinates: string | null;
    address: string | null;
    name: string | null;
    district: string | null;
    pincode: string | null;
    telephone: string | null;
    category: string | null;
    state: string | null;
  }
  