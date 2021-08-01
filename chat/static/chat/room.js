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
    /* fix: you tried to change the value of a div, you need to change it's innerHTL */
    document.querySelector('#chat-log').innerHTML += (data.message) + '<br>'
}

chatSocket.onclose = function(e){
    console.error('chat socket closed')
}

var chat_message_input = document.querySelector('#chat-message-input')
var chat_message_submit = document.querySelector('#chat-message-submit')

chat_message_input.focus()
chat_message_input.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        chat_message_submit.click()
        alert('worked')
    }
})

chat_message_submit.onclick = function(e){
    const message = chat_message_input.value;
    chatSocket.send(JSON.stringify({
        'message':message
    }));
    console.log(message)
    chat_message_input.value = ''
};

