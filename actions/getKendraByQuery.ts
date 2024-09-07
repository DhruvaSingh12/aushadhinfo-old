import { Kendra } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getKendraByQuery = async (query: string): Promise<Kendra[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  // Log query for debugging
  console.log("Search Query:", query);

  if (!query) {
    // Return all kendras if no search query is provided
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

  // If there is a query, use Full-Text Search
  const { data, error } = await supabase
    .from('janaushadhi_kendra')
    .select('*')
    .textSearch('fts', query, {
      type: 'plain',  // Use plain for simple text search
      config: 'english',  // Language config for search
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
