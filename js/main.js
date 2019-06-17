
var list = [
    {'desc':'rice', 'amount':'1', 'value':'5.40'},
    {'desc':'milk', 'amount':'5', 'value':'1.40'},
    {'desc':'meat', 'amount':'1', 'value':'10.40'}
];

function getTotal(list) {
    var total = 0;
    for(var key in list) {
        total += list[key].amount * list[key].value;
    }
    return total;
}

function setList(list) {
    var table = '<thead>'+
        '<tr>'+
            '<td>Description</td>'+
            '<td>Amount</td>'+
            '<td>Value</td>'+
            '<td>Action</td>'+
        '</tr>'+
    '</thead>'+
    '<tbody>';

    for(var key in list) {
        table += '<tr>'+
            '<td>'+formatDesc(list[key].desc)+'</td>'+
            '<td>'+list[key].amount+'</td>'+
            '<td>'+formatValue(list[key].value)+'</td>'+
            '<td><a class="btn btn-link">Editar</a> | <a class="btn btn-link">Deletar</a></td>'+
        '</tr>';
    }
    table += '</tbody>';
    document.getElementById('listTable').innerHTML = table;
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace('.',',');
    str = "$ " + str;
    return str;
}

setList(list);
console.log(getTotal(list));
