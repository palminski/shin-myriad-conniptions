export const smoothScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if(target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
        });
    }
    else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
};

export const scrollToHash = () => {
    const {hash} = window.location;
    if (hash) {
        const targetId = hash.replace('#', '');
        smoothScroll(targetId);
    }
}