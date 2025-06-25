// Configuration file for UPHASH Viewer
// IMPORTANT: Do not commit actual API keys to this file!

// For development: Create a config.local.js file with your actual API key
// For production: Use GitHub Secrets with GitHub Actions to inject the API key

const REFLCT_CONFIG = {
    // This will be replaced by GitHub Actions during deployment
    apiKey: process.env.REFLCT_API_KEY || 'YOUR_API_KEY_HERE',
    
    // Default scene configuration
    defaultSceneId: 'baf502d8-d568-4b5a-affe-d2a62830d815',
    
    // Public demo scenes (these don't require API key)
    demoScenes: {
        'bois-studio': 'ZGUyMDY1MjEtZmFmNi00ODFlLWI0MmYtODY0ZGE4YWJlY2FkOjdoVWM0MVB0elVQa0R1Q3pKbW0zbWQ=',
        'interior-scan': 'NTc4MGVkM2MtZDA1MS00YjEyLTg4M2EtOTA4Nzk2YjhjNGU4OjNCUmk3YURuQWk0WjUyUEREUThzY1M%3D',
        'castle-winter': 'OTk0ZTNiYmYtY2UzYy00MGI2LWEyM2ItZjlkMTc0ZWYyMWY0OjNCUmk3YURuQWk0WjUyUEREUThzY1M='
    },
    
    // UPHASH custom scenes
    customScenes: {
        'uphash-scene-1': 'baf502d8-d568-4b5a-affe-d2a62830d815',
        'uphash-scene-2': '016b6bab-850b-4224-9619-3b7ea0569776',
        'cic-fukuoka-game': '6e45923f-18e6-4953-9377-fc27a86d2f4f'
    }
};

// Try to load local configuration if available
if (typeof module === 'undefined') {
    // Browser environment
    const script = document.createElement('script');
    script.src = 'config.local.js';
    script.onerror = () => {
        console.log('No local config found, using default configuration');
    };
    document.head.appendChild(script);
}