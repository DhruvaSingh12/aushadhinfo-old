import { Kendra } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getKendraByQuery = async (query: string): Promise<Kendra[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  console.log("Search Query:", query);

  if (!query) {
  
    const { data, error } = await supabase
      .from('janaushadhi_kendra')
      .select('*')
      .order('state', { ascending: true });

    if (error) {
      console.error("Supabase Error:", error);
      return [];
    }

    console.log("Fetched Data without Query:", data);
    return data as Kendra[];
  }

  const { data, error } = await supabase
    .from('janaushadhi_kendra')
    .select('*')
    .textSearch('fts', query, {
      type: 'plain', 
      config: 'english',  
    })
    .order('state', { ascending: true });

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  console.log("Fetched Data with Query:", data);
  return data as Kendra[];
};

export default getKendraByQuery;
