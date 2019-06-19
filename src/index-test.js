import seqClass from '.';

const opener = document.querySelector('#layerOpener');
const closer = document.querySelector('#layerCloser');
const layer = seqClass(document.querySelector('.layer'));
// const layer = seqClass('.layer');
opener.addEventListener('click', ()=>{
    layer.clear();
    layer.addClass(['ready','active'], {
        delayTime: 100,
        callback : ()=>{
            layer.addClass('effect');
        }
    });
});

closer.addEventListener('click', ()=>{
    layer.clear();
    layer.removeClass(['effect','active','ready'], {
        delayTime: 500
    });
});