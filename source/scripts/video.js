const frame = document.querySelector('.video__play');

const video_placeholder = document.querySelector('.video__placeholder');

video_placeholder.addEventListener('click', play);

function play(){
    frame.contentWindow.postMessage(JSON.stringify({
        'event': 'command',
        'func': 'playVideo',
        'args': []
    }),'*');

    video_placeholder.style.display="none";
}