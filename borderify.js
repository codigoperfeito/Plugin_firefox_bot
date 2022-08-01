function repetir() {
    if (window.location.pathname == "/_agendamento.eletronico/renach/tela1.asp") {
        setTimeout(() => {
            document.querySelector('.inputG').value = '';
            document.querySelector('.inputN').value = '';
            document.querySelector('.dataForm').value = '';
            document.getElementsByClassName('inputG')[1].value = '';
            document.getElementsByClassName('inputN')[1].value = '';
            document.getElementsByClassName('inputN')[2].value = '';
            document.getElementsByClassName('dataForm')[1].value = '';
            document.getElementsByClassName('inputN')[3].value = '';
            document.getElementsByClassName('inputN')[4].value = '';
            document.getElementById('email').value = '';
            document.getElementById('categoria').value = '';
            document.getElementsByClassName('inputN')[5].value = '';
            document.querySelectorAll('input[name="aproveitamento"]')[1].checked = true;
            document.querySelectorAll('form')[1].submit();
        }, 3000)
    };    
    if (window.location.pathname == "/_agendamento.eletronico/renach/tela12.asp") {
        setTimeout(() => {
            document.querySelector('[value="Enviar"]').click();
        }, 2000)
    };
    if (window.location.pathname == "/_agendamento.eletronico/renach/tela13.asp") {
        setTimeout(() => {
            const bangu = document.querySelector('[type="radio"]').parentElement.innerText.search('BANGU');
                if (bangu >= 0){
                    document.querySelectorAll('form')[1].submit();
                }else{
                    history.go(-2);
                }      
        }, 1500)
    };
    if (window.location.pathname == "/_agendamento.eletronico/renach/tela14.asp") {
        setTimeout(() => {
            document.querySelector('[type="radio"]').checked = true;
            document.querySelectorAll('form')[1].submit();
        }, 1500)
    };
    if (window.location.pathname == "/_agendamento.eletronico/renach/tela15.asp") {
        setTimeout(() => {
            document.querySelector('input[type="checkbox"]').checked = true;
            document.querySelector('div[id="exibeEnviar"]').style.display = 'block';
            document.querySelectorAll('form')[1].submit();
        }, 1000)
    };
    if (window.location.pathname == "/_agendamento.eletronico/renach/erro.asp") {
        setTimeout(() => {
            history.go(-2);
        }, 2000)
    };
}
repetir();
