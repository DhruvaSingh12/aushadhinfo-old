import { MedicineData } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getMedicineDataByQuery = async (query: string): Promise<MedicineData[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!query) {
    const { data, error } = await supabase
      .from('medicine_data') 
      .select('*')
      .order('product_name', { ascending: true }); 

    if (error) {
      console.log(error);
      return [];
    }

    return data as MedicineData[];
  }

  const queryLower = `%${query.toLowerCase()}%`;
  const { data, error } = await supabase
    .from('medicine_data')
    .select('*')
    .or(
      `sub_category.ilike.${queryLower},product_name.ilike.${queryLower},salt_composition.ilike.${queryLower},medicine_desc.ilike.${queryLower}`
    )
    .order('product_name', { ascending: true }); 

  if (error) {
    console.log(error);
    return [];
  }

  return data as MedicineData[];
};

export default getMedicineDataByQuery;
