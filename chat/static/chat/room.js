const roomName = JSON.parse(document.querySelector("#room-name").textContent)

const chatSocket = new WebSocket(
    'ws://'
    +window.location.host
    +'/ws/chat/'
    +roomName
    +'/'
);

chatSocket.onmessage = function(e){
    const data = JSON.parse(e.data);
    document.querySelector('#chat-log').value += (data.message + "\n")
}

chatSocket.onclose = function(e){
    console.error('chat socket closed')
}

var chat_message_input = document.querySelector('#chat-message-input')
var chat_message_submit = document.querySelector('#chat-message-submit')

chat_message_input.focus()
chat_message_input.onkeyup = function(e){
    if(e.keycode === 13){
        chat_message_submit.click()
        alert('woee')
    }
};

chat_message_submit.onclick = function(e){
    console.log('workeddd')
    const message = chat_message_input.value;
    chatSocket.send(JSON.stringify({
        'message':message
    }));

    chat_message_input.value = ''
};

