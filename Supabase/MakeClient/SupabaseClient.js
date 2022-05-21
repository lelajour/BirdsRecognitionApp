import { createClient } from '@supabase/supabase-js';
import GetBirdsList from '../GetBirdsList/GetBirdsList';


const MakeClient = () => {
    this.client = createClient({
        url: 'https://xvamxlyulavfmjaapmsb.supabase.co',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2YW14bHl1bGF2Zm1qYWFwbXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMwOTY1MjEsImV4cCI6MTk2ODY3MjUyMX0.3juJzcpiDkCsDqCHH05nO5N1ATeU04EV7XNeUnRbEeg'
    })
    this.GetBirdsList = () => {
        return GetBirdsList(this.client);
    }
}

export MakeClient;