// Resource Statistics Management System
class ResourceStats {
    constructor() {
        this.resources = {
            'akyessentialsaddon': {
                name: 'AkyEssentialsAddon',
                downloads: 150,
                rating: 5.0,
                ratingCount: 42,
                version: 'v1.0.0',
                lastUpdated: new Date().toISOString()
            },
            'akyrelog': {
                name: 'AkyRelog',
                downloads: 200,
                rating: 4.8,
                ratingCount: 35,
                version: 'v1.0.0',
                lastUpdated: new Date().toISOString()
            },
            'akylogger': {
                name: 'AkyLogger',
                downloads: 120,
                rating: 4.9,
                ratingCount: 28,
                version: 'v1.0.0',
                lastUpdated: new Date().toISOString()
            },
            'akyevenets': {
                name: 'AkyEvents',
                downloads: 130,
                rating: 4.7,
                ratingCount: 31,
                version: 'v1.0.0',
                lastUpdated: new Date().toISOString()
            }
        };
        
        this.loadStats();
        this.initEventListeners();
    }
    
    // Load statistics from localStorage
    loadStats() {
        const savedStats = localStorage.getItem('akydev_resource_stats');
        if (savedStats) {
            try {
                const parsed = JSON.parse(savedStats);
                // Merge with default stats to ensure all resources exist
                Object.keys(this.resources).forEach(key => {
                    if (parsed[key]) {
                        this.resources[key] = { ...this.resources[key], ...parsed[key] };
                    }
                });
            } catch (e) {
                console.error('Error loading stats:', e);
            }
        }
    }
    
    // Save statistics to localStorage
    saveStats() {
        localStorage.setItem('akydev_resource_stats', JSON.stringify(this.resources));
    }
    
    // Get resource statistics
    getResourceStats(resourceId) {
        return this.resources[resourceId] || null;
    }
    
    // Update download count
    incrementDownloads(resourceId) {
        if (this.resources[resourceId]) {
            this.resources[resourceId].downloads++;
            this.resources[resourceId].lastUpdated = new Date().toISOString();
            this.saveStats();
            this.updateUI(resourceId);
            return true;
        }
        return false;
    }
    
    // Update rating
    updateRating(resourceId, newRating) {
        if (this.resources[resourceId] && newRating >= 1 && newRating <= 5) {
            const resource = this.resources[resourceId];
            const totalRating = resource.rating * resource.ratingCount + newRating;
            resource.ratingCount++;
            resource.rating = Math.round((totalRating / resource.ratingCount) * 10) / 10;
            resource.lastUpdated = new Date().toISOString();
            this.saveStats();
            this.updateUI(resourceId);
            return true;
        }
        return false;
    }
    
    // Update version
    updateVersion(resourceId, newVersion) {
        if (this.resources[resourceId]) {
            this.resources[resourceId].version = newVersion;
            this.resources[resourceId].lastUpdated = new Date().toISOString();
            this.saveStats();
            this.updateUI(resourceId);
            return true;
        }
        return false;
    }
    
    // Get formatted download count
    getFormattedDownloads(resourceId) {
        const downloads = this.resources[resourceId]?.downloads || 0;
        if (downloads >= 1000) {
            return (downloads / 1000).toFixed(1) + 'K+';
        }
        return downloads.toString();
    }
    
    // Get formatted rating
    getFormattedRating(resourceId) {
        const resource = this.resources[resourceId];
        if (!resource) return '0.0';
        return resource.rating.toFixed(1);
    }
    
    // Update UI elements
    updateUI(resourceId) {
        const resource = this.resources[resourceId];
        if (!resource) return;
        
        // Update download count
        const downloadElements = document.querySelectorAll(`[data-resource="${resourceId}"] .download-count`);
        downloadElements.forEach(el => {
            el.textContent = this.getFormattedDownloads(resourceId);
        });
        
        // Update rating
        const ratingElements = document.querySelectorAll(`[data-resource="${resourceId}"] .rating-value`);
        ratingElements.forEach(el => {
            el.textContent = this.getFormattedRating(resourceId);
        });
        
        // Update rating count
        const ratingCountElements = document.querySelectorAll(`[data-resource="${resourceId}"] .rating-count`);
        ratingCountElements.forEach(el => {
            el.textContent = `(${resource.ratingCount})`;
        });
        
        // Update version
        const versionElements = document.querySelectorAll(`[data-resource="${resourceId}"] .version-value`);
        versionElements.forEach(el => {
            el.textContent = resource.version;
        });
    }
    
    // Initialize event listeners
    initEventListeners() {
        // Download button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.download-btn')) {
                const resourceId = e.target.dataset.resource;
                if (resourceId && this.incrementDownloads(resourceId)) {
                    this.showNotification('Скачивание начато!', 'success');
                }
            }
        });
        
        // Rating clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.rating-star')) {
                const resourceId = e.target.dataset.resource;
                const rating = parseInt(e.target.dataset.rating);
                if (resourceId && this.updateRating(resourceId, rating)) {
                    this.showNotification('Спасибо за оценку!', 'success');
                    this.updateStarDisplay(resourceId);
                }
            }
        });
    }
    
    // Update star display
    updateStarDisplay(resourceId) {
        const resource = this.resources[resourceId];
        if (!resource) return;
        
        const stars = document.querySelectorAll(`[data-resource="${resourceId}"] .rating-star`);
        stars.forEach((star, index) => {
            const rating = index + 1;
            if (rating <= Math.floor(resource.rating)) {
                star.textContent = '⭐';
            } else if (rating === Math.ceil(resource.rating) && resource.rating % 1 !== 0) {
                star.textContent = '⭐';
            } else {
                star.textContent = '☆';
            }
        });
    }
    
    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            background: ${type === 'success' ? 'var(--accent-primary)' : 'var(--text-secondary)'};
            color: var(--bg-primary);
            border-radius: var(--radius-sm);
            font-weight: 600;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Get all resources data
    getAllResources() {
        return this.resources;
    }
    
    // Export data for admin panel
    exportData() {
        return {
            resources: this.resources,
            timestamp: new Date().toISOString(),
            totalDownloads: Object.values(this.resources).reduce((sum, r) => sum + r.downloads, 0),
            averageRating: (Object.values(this.resources).reduce((sum, r) => sum + r.rating, 0) / Object.keys(this.resources).length).toFixed(1)
        };
    }
}

// Initialize the stats system
const resourceStats = new ResourceStats();

// Make it globally available
window.resourceStats = resourceStats;

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .rating-star {
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 20px;
    }
    
    .rating-star:hover {
        transform: scale(1.2);
    }
    
    .download-btn {
        transition: all 0.3s ease;
    }
    
    .download-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(200, 255, 0, 0.3);
    }
`;
document.head.appendChild(style);
