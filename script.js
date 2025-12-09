let zIndexCounter = 100;

function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'flex';
    bringToFront(windowElement);
    
    if (!windowElement.getAttribute('data-draggable')) {
        makeDraggable(windowElement);
        windowElement.setAttribute('data-draggable', 'true');
    }
}

function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

function minimizeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

function bringToFront(element) {
    zIndexCounter++;
    element.style.zIndex = zIndexCounter;
}

function makeDraggable(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = elmnt.querySelector(".title-bar");

    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        bringToFront(elmnt);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock();

document.querySelectorAll('.window').forEach(win => {
    win.addEventListener('mousedown', () => {
        bringToFront(win);
    });
});
