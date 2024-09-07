import { Hospital } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getHospitalsByQuery = async (query: string): Promise<Hospital[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  // Log query for debugging
  console.log("Search Query:", query);

  // If no query, return all hospitals
  if (!query) {
    const { data, error } = await supabase
      .from('hospitals') // Make sure this is the correct table name
      .select('*')
      .order('hospital_name', { ascending: true });

    if (error) {
      console.error("Supabase Error:", error);
      return [];
    }

    console.log("Fetched Hospitals without Query:", data);
    return data as Hospital[];
  }

  // If there is a query, filter hospitals by the search query
  const { data, error } = await supabase
    .from('hospitals')
    .select('*')
    .ilike('hospital_name', `%${query}%`) // Search hospital_name case-insensitively
    .order('hospital_name', { ascending: true });

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  console.log("Fetched Hospitals with Query:", data);
  return data as Hospital[];
};

export default getHospitalsByQuery;
