window.onload = function () {
    let tableElement = document.createElement('table');
    let tr1Element = document.createElement('tr');
    let tr2Element = document.createElement('tr');
    let td11Element = document.createElement('td');
    let td12Element = document.createElement('td');
    let td21Element = document.createElement('td');
    let td22Element = document.createElement('td');

    td11Element.innerText = 'Mariah';
    td12Element.innerText = 'Myah';
    td21Element.innerText = 'Ramona';
    td22Element.innerText = 'Christop';

    td11Element.style.color = '#2f7910';
    td12Element.style.color = '#104a4e';
    td21Element.style.color = '#3c4d53';
    td22Element.style.color = '#761e52';
    tableElement.style.border = '1px solid black';
    tableElement.border = '2px';

    tr1Element.append(td11Element, td12Element);
    tr2Element.append(td21Element, td22Element);

    tableElement.append(tr1Element, tr2Element);

    document.getElementById('main').append(tableElement);
}