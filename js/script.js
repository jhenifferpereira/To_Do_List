const novo_item = document.getElementById('item');

function lista(){
    const li = document.createElement('li');
    const item_lista = novo_item.value
    //console.log(novo_item.value);
    const input_text = document.createTextNode(item_lista);

    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.getElementById('item').value = "";
    createButtonClose(li);
}
function createButtonClose(li){
    let span = document.createElement('span');
    let text = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);
   span.onclick = () => span.parentElement.remove();
}

