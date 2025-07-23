// =================================================================================
// Script du Tableau de Bord
// ---------------------------------------------------------------------------------
// Gère la logique de la page protégée, y compris la vérification de session
// et la déconnexion.
// =================================================================================

// 1. Initialisation
// ---------------------------------------------------------------------------------
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);

const logoutButton = document.getElementById('logout-button');

// 2. Logique Principale
// ---------------------------------------------------------------------------------

/**
 * Déconnecte l'utilisateur, efface la session et redirige vers la page de connexion.
 */
async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error('Erreur lors de la déconnexion:', error.message);
    } else {
        // Rediriger vers la page de connexion après la déconnexion
        window.location.href = './index.html';
    }
}

/**
 * Vérifie s'il existe une session utilisateur active.
 * Si aucune session n'est trouvée, l'utilisateur est renvoyé de force
 * vers la page de connexion. C'est la principale mesure de sécurité de cette page.
 */
async function checkSession() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        console.log('Aucune session active. Redirection vers la page de connexion.');
        window.location.href = './index.html';
    } else {
        console.log('Session valide. Accès autorisé.');
    }
}

// 3. Écouteurs d'Événements
// ---------------------------------------------------------------------------------

// Attacher l'événement de déconnexion au bouton
// On le fait à l'intérieur de checkSession pour s'assurer que le client est prêt
// logoutButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     signOut();
// });

// Vérifier la session dès que le contenu de la page est chargé
// C'est la première chose à faire pour sécuriser la page.
document.addEventListener('DOMContentLoaded', async () => {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        console.log('Aucune session active. Redirection vers la page de connexion.');
        window.location.href = './index.html';
    } else {
        console.log('Session valide. Accès autorisé.');
        // Attacher l'événement de déconnexion seulement si la session est valide
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            signOut();
        });
    }
});