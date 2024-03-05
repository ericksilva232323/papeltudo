
const item = document.getElementById('item');
    fetch('http://localhost:3000/item')
    then(res => res.json())
    .then(res => {
        res.array.forEach(i => {
            item.innerHTML += `
            <tr>
                <td>${i.id}</td>
                <td>${i.nome}</td>
                <td>${i.descricao}</td>
                <td>${i.valor}</td>
                <td>
                    <button onclick = 'windown.location.href=".update.html?id=${i.id}&nome=${i.nome}&descricao=${i.descricao}&valor=${i.valor}"'>[ - ]</button>
                    <button onclick = 'excluir(${i.id})'>[ * ]</button>
                </td>
            </tr>`
        });
    });
    
    function del(id){
        fetch(`http://localhost:3000/item/${id}`, {
            method: 'DELETE'
        })
     .then(res => res.json())
     .then(res =>{
        window.location.reload();
 
     });
    }