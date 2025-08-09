export class ThemeManager {
    constructor() {
        this.currentTheme = 'classic';
        this.themes = {
            classic: {
                name: 'Classic',
                properties: {
                    '--bg-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '--text-primary': '#ffffff',
                    '--text-secondary': '#ffffff',
                    '--panel-bg': 'rgba(255, 255, 255, 0.1)',
                    '--panel-border': 'transparent',
                    '--button-primary-bg': 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                    '--button-primary-hover': 'linear-gradient(45deg, #ff5252, #e53935)',
                    '--button-secondary-bg': 'linear-gradient(45deg, #4CAF50, #45a049)',
                    '--button-secondary-hover': 'linear-gradient(45deg, #45a049, #3d8b40)',
                    '--board-bg': '#333333',
                    '--cell-bg': '#c0c0c0',
                    '--cell-border': '#c0c0c0',
                    '--cell-hover': '#d0d0d0',
                    '--cell-revealed': '#e0e0e0',
                    '--cell-mine': '#ff4444',
                    '--game-over-color': '#ff4444',
                    '--game-won-color': '#44ff44',
                    '--theme-selector-bg': 'rgba(255, 255, 255, 0.15)',
                    '--theme-select-bg': 'rgba(255, 255, 255, 0.9)',
                    '--theme-select-color': '#333333'
                }
            },
            dark: {
                name: 'Dark',
                properties: {
                    '--bg-gradient': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                    '--text-primary': '#ecf0f1',
                    '--text-secondary': '#bdc3c7',
                    '--panel-bg': 'rgba(52, 73, 94, 0.8)',
                    '--panel-border': '#7f8c8d',
                    '--button-primary-bg': 'linear-gradient(45deg, #e74c3c, #c0392b)',
                    '--button-primary-hover': 'linear-gradient(45deg, #c0392b, #a93226)',
                    '--button-secondary-bg': 'linear-gradient(45deg, #27ae60, #229954)',
                    '--button-secondary-hover': 'linear-gradient(45deg, #229954, #1e8449)',
                    '--board-bg': '#1a1a1a',
                    '--cell-bg': '#4a4a4a',
                    '--cell-border': '#4a4a4a',
                    '--cell-hover': '#5a5a5a',
                    '--cell-revealed': '#6a6a6a',
                    '--cell-mine': '#e74c3c',
                    '--game-over-color': '#e74c3c',
                    '--game-won-color': '#27ae60',
                    '--theme-selector-bg': 'rgba(52, 73, 94, 0.9)',
                    '--theme-select-bg': 'rgba(236, 240, 241, 0.9)',
                    '--theme-select-color': '#2c3e50'
                }
            },
            ocean: {
                name: 'Ocean',
                properties: {
                    '--bg-gradient': 'linear-gradient(135deg, #667db6 0%, #0082c8 25%, #0052a3 50%, #00459c 100%)',
                    '--text-primary': '#ffffff',
                    '--text-secondary': '#e8f4fd',
                    '--panel-bg': 'rgba(0, 130, 200, 0.2)',
                    '--panel-border': 'rgba(255, 255, 255, 0.3)',
                    '--button-primary-bg': 'linear-gradient(45deg, #0074d9, #0056b3)',
                    '--button-primary-hover': 'linear-gradient(45deg, #0056b3, #004085)',
                    '--button-secondary-bg': 'linear-gradient(45deg, #17a2b8, #138496)',
                    '--button-secondary-hover': 'linear-gradient(45deg, #138496, #0f6674)',
                    '--board-bg': '#001a2e',
                    '--cell-bg': '#4fc3f7',
                    '--cell-border': '#4fc3f7',
                    '--cell-hover': '#64b5f6',
                    '--cell-revealed': '#90caf9',
                    '--cell-mine': '#ff5722',
                    '--game-over-color': '#ff5722',
                    '--game-won-color': '#4caf50',
                    '--theme-selector-bg': 'rgba(0, 130, 200, 0.3)',
                    '--theme-select-bg': 'rgba(255, 255, 255, 0.95)',
                    '--theme-select-color': '#0052a3'
                }
            },
            forest: {
                name: 'Forest',
                properties: {
                    '--bg-gradient': 'linear-gradient(135deg, #2d5016 0%, #3e6b1f 25%, #4a7c28 50%, #568d31 100%)',
                    '--text-primary': '#ffffff',
                    '--text-secondary': '#e8f5e8',
                    '--panel-bg': 'rgba(45, 80, 22, 0.3)',
                    '--panel-border': 'rgba(255, 255, 255, 0.2)',
                    '--button-primary-bg': 'linear-gradient(45deg, #8bc34a, #689f38)',
                    '--button-primary-hover': 'linear-gradient(45deg, #689f38, #558b2f)',
                    '--button-secondary-bg': 'linear-gradient(45deg, #4caf50, #388e3c)',
                    '--button-secondary-hover': 'linear-gradient(45deg, #388e3c, #2e7d32)',
                    '--board-bg': '#1b2f0f',
                    '--cell-bg': '#8bc34a',
                    '--cell-border': '#8bc34a',
                    '--cell-hover': '#9ccc65',
                    '--cell-revealed': '#aed581',
                    '--cell-mine': '#ff5722',
                    '--game-over-color': '#ff5722',
                    '--game-won-color': '#cddc39',
                    '--theme-selector-bg': 'rgba(45, 80, 22, 0.4)',
                    '--theme-select-bg': 'rgba(255, 255, 255, 0.95)',
                    '--theme-select-color': '#2d5016'
                }
            },
            sunset: {
                name: 'Sunset',
                properties: {
                    '--bg-gradient': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #ffc3a0 100%)',
                    '--text-primary': '#6d4c41',
                    '--text-secondary': '#5d4037',
                    '--panel-bg': 'rgba(255, 154, 158, 0.3)',
                    '--panel-border': 'rgba(109, 76, 65, 0.2)',
                    '--button-primary-bg': 'linear-gradient(45deg, #ff7043, #ff5722)',
                    '--button-primary-hover': 'linear-gradient(45deg, #ff5722, #e64a19)',
                    '--button-secondary-bg': 'linear-gradient(45deg, #ff9800, #f57c00)',
                    '--button-secondary-hover': 'linear-gradient(45deg, #f57c00, #ef6c00)',
                    '--board-bg': '#3e2723',
                    '--cell-bg': '#ffcc80',
                    '--cell-border': '#ffcc80',
                    '--cell-hover': '#ffb74d',
                    '--cell-revealed': '#ffe0b2',
                    '--cell-mine': '#d32f2f',
                    '--game-over-color': '#d32f2f',
                    '--game-won-color': '#388e3c',
                    '--theme-selector-bg': 'rgba(255, 154, 158, 0.4)',
                    '--theme-select-bg': 'rgba(255, 255, 255, 0.95)',
                    '--theme-select-color': '#6d4c41'
                }
            }
        };
        
        this.init();
    }

    init() {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('minesweeper-theme');
        if (savedTheme && this.themes[savedTheme]) {
            this.currentTheme = savedTheme;
        }
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.applyTheme(this.currentTheme);
                this.setupEventListeners();
            });
        } else {
            this.applyTheme(this.currentTheme);
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
            themeSelect.value = this.currentTheme;
            themeSelect.addEventListener('change', (e) => {
                this.changeTheme(e.target.value);
            });
        }
    }

    changeTheme(themeName) {
        if (this.themes[themeName]) {
            this.currentTheme = themeName;
            this.applyTheme(themeName);
            // Save to localStorage
            localStorage.setItem('minesweeper-theme', themeName);
            
            // Dispatch custom event for theme change
            const themeChangeEvent = new CustomEvent('themeChanged', {
                detail: { oldTheme: this.currentTheme, newTheme: themeName }
            });
            document.dispatchEvent(themeChangeEvent);
        }
    }

    applyTheme(themeName) {
        const theme = this.themes[themeName];
        if (!theme) return;

        const root = document.documentElement;
        Object.entries(theme.properties).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });

        // Update theme selector if it exists
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
            themeSelect.value = themeName;
        }
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    getAvailableThemes() {
        return Object.keys(this.themes).map(key => ({
            id: key,
            name: this.themes[key].name
        }));
    }
}
