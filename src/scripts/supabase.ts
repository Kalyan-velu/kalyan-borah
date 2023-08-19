// Import the Supabase client library
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client instance using the provided environment variables
const supabase = createClient(
  import.meta.env.SUPABASE_URL as string, // The URL of your Supabase project
  import.meta.env.SUPABASE_KEY as string, // The API key for your Supabase project
  {
    auth: {
      persistSession: false // Disable session persistence for authentication
    }
  }
);

// Define a function to fetch analytics data from the Supabase table
export async function getAnalytics() {
  try {
    // Fetch analytics data from the 'analytics_path_visits' table
    const response = await supabase
      .from('analytics_path_visits')
      .select('*')
      .eq('host', import.meta.env.HOST) // Filter by the current host
      .neq('path', '/') // Exclude root path
      .like('path', '/%') // Include paths with '/'
      .order('visits', { ascending: false }); // Order by visits in descending order

    // Check if data was retrieved successfully
    if (response.data) {
      return response.data; // Return the fetched data
    }
  } catch (error) {
    console.error(error); // Log any errors that occur during the fetch
  }
  return []; // Return an empty array if fetching fails
}
