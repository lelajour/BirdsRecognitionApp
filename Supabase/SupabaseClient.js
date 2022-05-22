import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { AsyncStorage } from '@react-native-async-storage/async-storage';


class Client {
    constructor() {
        this.client = createClient(
            'https://xvamxlyulavfmjaapmsb.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2YW14bHl1bGF2Zm1qYWFwbXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMwOTY1MjEsImV4cCI6MTk2ODY3MjUyMX0.3juJzcpiDkCsDqCHH05nO5N1ATeU04EV7XNeUnRbEeg',
            {localStorage: AsyncStorage, detectSessionInUrl: false});
    }

   async GetBirds() {
        const fetchBirds = async () => {
            const {data, error} = await this.client.from('Birds').select('name');

            if (error) {
                console.log(error);
            }
            return data;
        }
        let ret = fetchBirds();
        return ret
    }
}

export { Client };