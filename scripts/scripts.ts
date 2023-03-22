    function formataMoeda(algumValor) {
        var valorFormatado = algumValor.toFixed(2).replace('.', ',')
        return valorFormatado;
    }
    
    function calculaCorrida() {
        var isCampoDistanciaEstaVazio = campoDistanciaEmKm.value == '';
        if (isCampoDistanciaEstaVazio) {        
            alert('Distância não informada. Verifique!')
            return;
        }                

        var tarifaDinamica = 1.4;
        var distanciaEmKm = campoDistanciaEmKm.value * tarifaDinamica;
        var tempoEmMin = campoTempoEmMinutos.value * 0.26;
        var valorDaCorrida = distanciaEmKm + tempoEmMin;

        alert("O valor da corrida é: " + formataMoeda(valorDaCorrida));//executa na hora
    }