import os
import re

def standardize_theme(directory):
    replacements = {
        r'pink-400': r'[#3b82f6]',
        r'pink-500': r'[#3b82f6]',
        r'rose-400': r'[#3b82f6]',
        r'rose-500': r'[#3b82f6]',
        r'purple-400': r'[#06b6d4]',
        r'purple-500': r'[#06b6d4]',
        r'#ff2d75': r'#3b82f6',
        r'#c586c0': r'#3b82f6',
        r'gradient-text-pink': r'gradient-text-accent',
        r'glass-pink': r'glass-dark'
    }

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.jsx', '.css', '.js')):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for pattern, replacement in replacements.items():
                    new_content = re.sub(pattern, replacement, new_content)
                
                if new_content != content:
                    print(f"Updating {path}")
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)

if __name__ == "__main__":
    standardize_theme('src')
