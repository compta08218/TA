// =================================================================================
// Script de Connexion
// ---------------------------------------------------------------------------------
// Gère la logique d'authentification avec Supabase.
// =================================================================================

// 1. Initialisation
// ---------------------------------------------------------------------------------
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);

const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const errorMessage = document.getElementById('error-message');

// 2. Logique Principale
// ---------------------------------------------------------------------------------

/**
 * Tente de connecter l'utilisateur avec le mot de passe fourni.
 * @param {string} password - Le mot de passe saisi par l'utilisateur.
 */
async function signIn(password) {
    // Désactiver le bouton pour éviter les soumissions multiples
    loginButton.disabled = true;
    loginButton.textContent = 'Connexion...';
    errorMessage.textContent = '';

    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: SUPABASE_CONFIG.USER_EMAIL,
            password: password,
        });

        if (error) {
            // Gérer les erreurs d'authentification
            console.error('Erreur de connexion:', error.message);
            errorMessage.textContent = 'Le mot de passe est incorrect. Veuillez réessayer.';
            throw new Error(error.message);
        }

        // Redirection en cas de succès
        window.location.href = SUPABASE_CONFIG.DASHBOARD_URL;

    } catch (error) {
        // Réactiver le bouton en cas d'erreur
        loginButton.disabled = false;
        loginButton.textContent = 'Se connecter';
    }
}

/**
 * Vérifie s'il existe une session utilisateur active au chargement de la page.
 * Si c'est le cas, redirige directement vers le tableau de bord.
 */
async function checkSession() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        console.log('Session active trouvée. Redirection...');
        window.location.href = SUPABASE_CONFIG.DASHBOARD_URL;
    } else {
        console.log('Pas de session active.');
    }
}


// 3. Écouteurs d'Événements
// ---------------------------------------------------------------------------------

// Gérer la soumission du formulaire
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const password = passwordInput.value;
    signIn(password);
});

// Vérifier la session au chargement de la page
document.addEventListener('DOMContentLoaded', checkSession);