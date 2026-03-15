interface SocialLink {
    id: string;
    name: string;
    url: string;
    shapeClass: string;
    iconClass: string;
    color: string;
}

class LinkHub {
    private links: SocialLink[] = [
        { id: 'tg', name: 'Telegram', url: 'https://t.me/your_username', shapeClass: 'shape-1', iconClass: 'fab fa-telegram-plane', color: '#0088cc' },
        { id: 'ins', name: 'Instagram', url: 'https://instagram.com/your_username', shapeClass: 'shape-2', iconClass: 'fab fa-instagram', color: '#e1306c' },
        { id: 'yt', name: 'YouTube', url: 'https://youtube.com/@your_channel', shapeClass: 'shape-3', iconClass: 'fab fa-youtube', color: '#ff0000' },
        { id: 'fb', name: 'Facebook', url: 'https://facebook.com/your_profile', shapeClass: 'shape-4', iconClass: 'fab fa-facebook-f', color: '#1877f2' }
    ];

    constructor() {
        this.init();
    }

    private init(): void {
        this.renderLinks();
        this.updateYear();
        this.updateUI();
    }

    private updateYear(): void {
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
    }

    private renderLinks(): void {
        const container = document.getElementById('links-container');
        if (!container) return;

        this.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = "_blank";
            a.className = `link-item ${link.shapeClass}`;
            a.onclick = () => this.handleButtonClick(link.id);

            a.innerHTML = `
                <div class="link-content">
                    <i class="${link.iconClass}" style="color:${link.color}"></i>
                    <span>${link.name}</span>
                </div>
                <span class="click-count" id="count-${link.id}">0 marta</span>
            `;
            container.appendChild(a);
        });
    }

    public handleButtonClick(id: string): void {
        const count = parseInt(localStorage.getItem('count_' + id) || '0') + 1;
        localStorage.setItem('count_' + id, count.toString());
        this.updateUI();
    }

    private updateUI(): void {
        this.links.forEach(link => {
            const val = localStorage.getItem('count_' + link.id) || '0';
            const el = document.getElementById(`count-${link.id}`);
            if (el) el.innerText = `${val} marta`;
        });
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new LinkHub();
});
