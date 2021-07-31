
var room_name_input = document.querySelector('#room-name-input');
var room_name_submit = document.querySelector('#room-name-submit');

room_name_input.focus();
// room_name_input.onkeyup = function(e){
//     if (e.keycode === 13){
//         room_name_submit.click();
//     }
// };

room_name_input.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        room_name_submit.click();
        alert('woee')
    }
})

room_name_submit.onclick = function(e){
        var roomName =  room_name_input.value;
        window.location.pathname = '/chat/' + roomName + '/';
}

