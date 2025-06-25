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
    
    if (!content) {
        viewerContainer.innerHTML = `
            <div class="placeholder-3d">
                <span style="font-size: 2rem; color: rgba(255,255,255,0.5);">
                    コンテンツが見つかりません
                </span>
            </div>
        `;
        return;
    }
    
    // Check if content has any scenes available
    if (!content.reflctSceneIds || Object.keys(content.reflctSceneIds).length === 0) {
        // Show a preview placeholder for content without scenes
        viewerContainer.innerHTML = `
            <div class="placeholder-3d" style="position: relative;">
                <span style="font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.1);">3DGS</span>
                <p style="margin-top: 1rem; color: rgba(255,255,255,0.5); font-size: 1rem;">
                    ${content.title}
                </p>
                <p style="margin-top: 0.5rem; color: rgba(255,255,255,0.3); font-size: 0.875rem;">
                    3Dシーンは準備中です
                </p>
                <div style="position: absolute; top: 1rem; right: 1rem; background: rgba(255,0,64,0.1); backdrop-filter: blur(10px); padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid rgba(255,0,64,0.2);">
                    <span style="color: var(--color-accent); font-size: 0.75rem; font-weight: 600;">COMING SOON</span>
                </div>
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
    
    // Add loading state
    viewerContainer.classList.add('loading');
    viewerContainer.style.opacity = '0.5';
    viewerContainer.style.transition = 'opacity 0.3s ease';
    
    const sceneId = content.reflctSceneIds?.[currentSpace];
    
    if (!sceneId) {
        viewerContainer.innerHTML = `
            <div class="placeholder-3d" style="position: relative;">
                <span style="font-size: 3rem; font-weight: 900; color: rgba(255,255,255,0.1);">3DGS</span>
                <p style="margin-top: 1rem; color: rgba(255,255,255,0.5); font-size: 1rem;">
                    ${currentSpace} のシーンは準備中です
                </p>
            </div>
        `;
        viewerContainer.style.opacity = '1';
        viewerContainer.classList.remove('loading');
        return;
    }
    
    // Get the actual scene token from demo scenes if available
    const sceneToken = REFLCT_CONFIG.demoScenes[sceneId] || sceneId;
    const customSceneId = REFLCT_CONFIG.customScenes[sceneId];
    
    // If we have a demo scene token, show the iframe
    if (REFLCT_CONFIG.demoScenes[sceneId]) {
        viewerContainer.innerHTML = `
            <iframe 
                src="https://www.reflct.app/share-scene?token=${sceneToken}"
                width="100%"
                height="100%"
                frameborder="0"
                allowfullscreen
                style="border-radius: 12px;"
                onload="this.parentElement.style.opacity = '1'; this.parentElement.classList.remove('loading');"
            ></iframe>
        `;
    } else if (customSceneId) {
        // For custom scenes, use the Reflct viewer with API key
        viewerContainer.innerHTML = `
            <iframe 
                src="https://app.reflct.app/viewer/${customSceneId}?key=${REFLCT_CONFIG.apiKey}"
                width="100%"
                height="100%"
                frameborder="0"
                allowfullscreen
                style="border-radius: 12px;"
                onload="this.parentElement.style.opacity = '1'; this.parentElement.classList.remove('loading');"
            ></iframe>
        `;
    } else {
        // Show placeholder for non-demo scenes
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
                        このコンテンツには専用のシーンIDが必要です
                    </p>
                </div>
            </div>
        `;
        viewerContainer.style.opacity = '1';
        viewerContainer.classList.remove('loading');
    }
}

// Handle space selection
function setupSpaceSelection() {
    // Use event delegation for dynamic buttons
    const spaceButtonsContainer = document.getElementById('space-buttons');
    
    if (spaceButtonsContainer) {
        spaceButtonsContainer.addEventListener('click', (event) => {
            const button = event.target.closest('.space-btn');
            if (!button) return;
            
            // Update active state
            const allButtons = spaceButtonsContainer.querySelectorAll('.space-btn');
            allButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update current space
            currentSpace = button.textContent;
            
            // Add visual feedback
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // Update viewer
            updateViewerIframe();
        });
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Wait for script.js to load first
        setTimeout(() => {
            initializeViewer();
            setupSpaceSelection();
        }, 100);
    });
} else {
    // Wait for script.js to load first
    setTimeout(() => {
        initializeViewer();
        setupSpaceSelection();
    }, 100);
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