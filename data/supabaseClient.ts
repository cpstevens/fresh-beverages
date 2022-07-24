import { supabaseClient } from "supabase";

export const db = new supabaseClient(
  "https://cpyrvtbxlgplcccydpho.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNweXJ2dGJ4bGdwbGNjY3lkcGhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg1NDY1NzgsImV4cCI6MTk3NDEyMjU3OH0.LHX5ByFaNSG8m9hfyzqTPQQKsn35y0OFxe7ElpCInbs",
);
