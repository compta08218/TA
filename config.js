// =================================================================================
// Fichier de Configuration
// ---------------------------------------------------------------------------------
// Ce fichier centralise les variables de configuration pour l'application.
// Il simule des variables d'environnement pour un projet frontend statique.
// =================================================================================

const SUPABASE_CONFIG = {
  // URL de votre projet Supabase
  URL: "https://nqdxvjiyafgfavisadik.supabase.co",

  // Clé publique (anon) de votre projet Supabase
  // Cette clé est sécuritaire à exposer côté client.
  // La sécurité est gérée par les politiques RLS (Row Level Security) de Supabase.
  ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xZHh2aml5YWZnZmF2aXNhZGlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNzMwNDYsImV4cCI6MjA2ODg0OTA0Nn0.a_RjuPsC0EXo28pD_7jYM92MX2X6jUHQUQhDVV6tH0k",

  // Email de l'utilisateur générique pour la connexion
  // Dans une application réelle, ceci ne serait pas stocké ici.
  USER_EMAIL: "comptable@example.com",

  // La page vers laquelle rediriger après une connexion réussie
  DASHBOARD_URL: "./S_16400002_Mat_450000_19_26.html"
};