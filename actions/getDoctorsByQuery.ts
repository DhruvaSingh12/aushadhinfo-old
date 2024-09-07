import { Doctor } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getDoctorsByQuery = async (query: string): Promise<Doctor[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!query) {
    const { data, error } = await supabase
      .from('doctors')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.log(error);
      return [];
    }

    return data as Doctor[];
  }

  const queryLower = `%${query.toLowerCase()}%`;
  const { data, error } = await supabase
    .from('doctors')
    .select('*')
    .or(`district.ilike.${queryLower},name.ilike.${queryLower},qualifications.ilike.${queryLower},facility_type.ilike.${queryLower}`)
    .order('name', { ascending: true });

  if (error) {
    console.log(error);
    return [];
  }

  return data as Doctor[];
};

export default getDoctorsByQuery;
