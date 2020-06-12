function show_selected() {
    //Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
   
    var selector = document.getElementById('id_of_select');
    var value = selector[selector.selectedIndex].value;
    var cantidad = document.getElementById('cantidad').value;

    value = value * cantidad;
    document.getElementById('display').innerHTML = value;
}

document.getElementById('btn').addEventListener('click', show_selected);