document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.btn').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        if(document.querySelector('#task').value.length > 0){
            document.querySelector('.btn').disabled = false;
        } else {
            document.querySelector('.btn').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
    const task = document.querySelector('#task').value;
    
    const li = document.createElement('li');
    li.innerHTML = task;
    const check = document.createElement('button');
    const bin = document.createElement('button');
    check.innerHTML = '<i class="fas fa-2x fa-check-square"></i>';
    bin.innerHTML = '<i class="far fa-2x fa-trash-alt"></i>';

    document.querySelector('#h2').innerHTML = 'Tasks To Do';
    document.querySelector('#h21').innerHTML = 'Completed Tasks';

    document.querySelector('#tasks').append(li);
    document.querySelector('#tasks').append(check);
    document.querySelector('#tasks').append(bin);

    document.querySelector('#task').value = '';
    document.querySelector('.btn').disabled = true;
    
    
    bin.addEventListener('click', function(e) {
        li.remove();
        check.remove();
        bin.remove();
    });

    check.addEventListener('click', function(e) {
        li.remove();
        check.remove();
        bin.remove();
        document.querySelector('#comp').append(li);
        document.querySelector('#comp').append(check);
        document.querySelector('#comp').append(bin);
        check.style.display = 'none';
    });

    return false;
}
});