// Reflct 3DGS Viewer Integration for Detail Page

// Get content ID from URL
const urlParams = new URLSearchParams(window.location.search);
const contentId = parseInt(urlParams.get('id')) || 1;

// Find content data
const content = catalogData.find(item => item.id === contentId);

// Current selected space
let currentSpace = '';

// Initialize viewer placeholder
function initializeViewer() {
    const viewerContainer = document.getElementById('reflct-viewer');
    
    if (!content || !content.reflctSceneIds) {
        viewerContainer.innerHTML = `
            <div class="placeholder-3d">
                <span style="font-size: 2rem; color: rgba(255,255,255,0.5);">
                    3Dシーンが利用できません
                </span>
            </div>
        `;
        return;
    }
    
    // Set initial space
    currentSpace = content.spaces[0];
    
    // Create iframe for Reflct viewer (temporary solution until npm package is set up)
    updateViewerIframe();
}

// Update viewer when space is selected
function updateViewerIframe() {
    const viewerContainer = document.getElementById('reflct-viewer');
    const sceneId = content.reflctSceneIds?.[currentSpace] || REFLCT_CONFIG.defaultSceneId;
    
    // For now, show a placeholder with integration instructions
    viewerContainer.innerHTML = `
        <div class="reflct-integration-placeholder" style="
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
            border-radius: 12px;
            padding: 3rem;
            text-align: center;
        ">
            <div style="
                background: rgba(255,255,255,0.05);
                padding: 2rem;
                border-radius: 8px;
                backdrop-filter: blur(10px);
                max-width: 600px;
            ">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--color-accent);">
                    Reflct 3DGSビューアー
                </h3>
                <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.8);">
                    選択中の空間: <strong>${currentSpace}</strong>
                </p>
                <p style="margin-bottom: 1rem; color: rgba(255,255,255,0.6); font-size: 0.875rem;">
                    Scene ID: ${sceneId}
                </p>
                <div style="
                    background: rgba(0,0,0,0.3);
                    padding: 1rem;
                    border-radius: 4px;
                    margin-top: 1.5rem;
                    font-family: monospace;
                    font-size: 0.875rem;
                    text-align: left;
                ">
                    <p style="margin-bottom: 0.5rem; color: #ff6b6b;">// Reflct統合コード例:</p>
                    <p style="color: #66d9ef;">npm install @reflct/react</p>
                    <p style="margin-top: 0.5rem; color: #a6e22e;">
                        &lt;Viewer id="${sceneId}" apikey="${REFLCT_CONFIG.apiKey}" /&gt;
                    </p>
                </div>
                <p style="margin-top: 1.5rem; color: rgba(255,255,255,0.5); font-size: 0.75rem;">
                    実際の3Dシーンを表示するには、Reflct APIキーとシーンIDが必要です
                </p>
            </div>
        </div>
    `;
}

// Handle space selection
function setupSpaceSelection() {
    const spaceButtons = document.querySelectorAll('.space-btn');
    
    spaceButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            spaceButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update current space
            currentSpace = button.textContent;
            
            // Update viewer
            updateViewerIframe();
        });
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeViewer();
        setupSpaceSelection();
    });
} else {
    initializeViewer();
    setupSpaceSelection();
}

// Example of how to integrate actual Reflct viewer when ready:
/*
// Option 1: Using React component
import { Viewer } from '@reflct/react';

function DetailViewer({ sceneId }) {
    return (
        <Viewer 
            id={sceneId} 
            apikey={REFLCT_CONFIG.apiKey}
            style={{ width: '100%', height: '100%' }}
        />
    );
}

// Option 2: Using iframe embed
function createReflctIframe(sceneId) {
    return `<iframe 
        src="https://app.reflct.app/viewer/${sceneId}?key=${REFLCT_CONFIG.apiKey}"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen
    ></iframe>`;
}
*/