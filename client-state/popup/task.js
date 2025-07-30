const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
    return null;
};

const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setDate(date.getDate() + days);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeBtn = modal.querySelector('.modal__close');

    if (!getCookie('modalClosed')) {
        modal.classList.add('modal_active');
    }

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal_active');
        setCookie('modalClosed', 'true', 365);
    });
});

