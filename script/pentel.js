let productsSignaturebrands;

const init = () => {
    productsSignaturebrands = Array.from(document.querySelectorAll('.products-signaturebrands'));
    setSignaturebrandsHoverActive();
};

const setSignaturebrandsHoverActive = () => {
    productsSignaturebrands.map((target) => {
        target.addEventListener('mouseenter', (el) => {
            productsSignaturebrands.map((_el) => {
                _el.classList.remove('hover')
            });
            const { classList } = el.target;
            classList.add('hover');
        });
    });
};

window.addEventListener('load', init);
