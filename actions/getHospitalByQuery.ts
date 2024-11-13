import { Hospital } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const getHospitalByQuery = async (query: string): Promise<Hospital[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!query) {
    const { data, error } = await supabase
      .from('hospital')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.log(error);
      return [];
    }

    return data.map(hospital => ({
      ...hospital,
      category: hospital.category || 'Private',
    })) as Hospital[];
  }

  const queryLower = `%${query.toLowerCase()}%`;
  const { data, error } = await supabase
    .from('hospital')
    .select('*')
    .or(`name.ilike.${queryLower},address.ilike.${queryLower},district.ilike.${queryLower},pincode.ilike.${queryLower},state.ilike.${queryLower}`)
    .order('name', { ascending: true });

  if (error) {
    console.log(error);
    return [];
  }

  return data.map(hospital => ({
    ...hospital,
    category: hospital.category || 'Private',
  })) as Hospital[];
};

export default getHospitalByQuery;
