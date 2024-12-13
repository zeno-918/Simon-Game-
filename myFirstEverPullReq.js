class ColorPaletteGenerator {
    constructor() {
        this.baseColors = [
            '#FF6B6B',
            '#4ECDC4', 
            '#45B7D1', 
            '#FDCB6E', 
            '#6C5CE7'
        ];
    }

    generateRandomColor() {
        return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    }

    generatePalette(size = 5) {
        const palette = [];
        
        for (let i = 0; i < Math.min(size, this.baseColors.length); i++) {
            palette.push(this.baseColors[i]);
        }

        while (palette.length < size) {
            const newColor = this.generateRandomColor();
            if (!palette.includes(newColor)) {
                palette.push(newColor);
            }
        }

        return palette;
    }

    displayPalette(palette) {
        console.log('🎨 Color Palette:');
        palette.forEach((color, index) => {
            console.log(`Color ${index + 1}: %c${color}`, `background: ${color}; color: white; padding: 5px;`);
        });
    }

    exportPalette(palette) {
        return JSON.stringify(palette, null, 2);
    }
}

function main() {
    const paletteGenerator = new ColorPaletteGenerator();
    
    const myPalette = paletteGenerator.generatePalette();
    
    paletteGenerator.displayPalette(myPalette);
    
    const paletteJSON = paletteGenerator.exportPalette(myPalette);
    console.log('Palette JSON:', paletteJSON);
}

main();

process.on('uncaughtException', (error) => {
    console.error('Oops! Something went wrong:', error.message);
});
