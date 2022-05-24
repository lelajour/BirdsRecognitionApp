import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {API_KEY, API_URL} from '@env';


class ClientSupabase {
    constructor() {
        this.client = createClient(
            API_URL,
            API_KEY,
            {localStorage: AsyncStorage, detectSessionInUrl: false});
    }

   async GetBirds() {
        const {data, error} = await this
            .client
            .from('Birds')
            .select('name');

        if (error) {
            console.log(error);
        }
        return data;
    }

    async GetBirdDetails(name) {
        const { data, error } = await this
            .client
            .from('Birds')
            .select('*')
            .eq('name', name)

        if (error) {
            console.log(error);
        }
        return data;
    }
}

const Client = new ClientSupabase();

export default Client;